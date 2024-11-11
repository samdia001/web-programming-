import { SnippetModel as model } from '../models/spt.mjs'
import { UserController } from './userController.mjs'
export const SnippetController = {}

SnippetController.findAll = async (req, res, next) => {
  let snippets

  if (!req.session.user) {
    snippets = await model.findAll()
  } else {
    const user = await UserController.getUser(req.session.user.id)
    if (user instanceof Error) {
      const errorData = JSON.parse(user.message)
      req.session.flashMessage = errorData.message
      res.status(errorData.status).redirect('/home')
      return
    }
    snippets = await model.findAll(user)
  }

  if (snippets instanceof Error) {
    const errorData = JSON.parse(snippets.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/home')
    return
  }

  req.session.snippets = snippets
  next()
}
SnippetController.findOne = async (req, res, next) => {
  const snippet = await model.findOne(req.params.id)

  if (snippet instanceof Error) {
    const errorData = JSON.parse(snippet.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }

  snippet.creator = await UserController.getAuthorName(snippet.createdBy)
  req.session.snippets = [snippet]
  next()
}

SnippetController.create = async (req, res) => {
  req.body.createdBy = req.session.user.id
  const snippets = await model.create(req.body)

  if (snippets instanceof Error) {
    const errorData = JSON.parse(snippets.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }

  const snippetadd = await UserController.addSnippet(req.session.user.id, snippets.id)

  if (snippetadd instanceof Error) {
    const errorData = JSON.parse(snippetadd.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }

  req.session.snippets = [snippets]
  req.session.flashMessage = 'New Snippet Created'
  res.redirect('/snippet/' + snippets.id)
}
SnippetController.delete = async (req, res) => {
  const deleted = await model.delete(req.params.id)
  if (deleted instanceof Error) {
    const errorData = JSON.parse(deleted.message)
    res.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
  }

  const user = await UserController.removeSnippet(req.session.user.id, req.params.id)

  if (user instanceof Error) {
    const errorData = JSON.parse(user.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }

  req.session.flashMessage = 'Snippet deleted'
  res.status(204).end()

  UserController.deleteSnippetRatingsFromUsers(req.params.id)
}
SnippetController.edit = async (req, res, next) => {
  req.body.id = req.params.id
  const edited = await model.edit(req.params.id, req.body)
  if (edited instanceof Error) {
    const errorData = JSON.parse(edited.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status)
    res.send('error')
    return
  }

  req.session.flashMessage = 'Snippet updated'
  req.session.snippets = edited

  res.status(200)
  res.send('ok')
}

SnippetController.rate = async (req, res) => {
  const rated = await model.rate(req.params.id, req.body.rating)
  if (rated instanceof Error) {
    const errorData = JSON.parse(rated.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }

  const userRate = await UserController.rateSnippet(req.session.user.id, req.params.id, req.body.rating)
  if (userRate instanceof Error) {
    const errorData = JSON.parse(userRate.message)
    req.session.flashMessage = errorData.message
    res.status(errorData.status).redirect('/snippet')
    return
  }
  req.session.user.ratedSnippets.push(req.params.id)
  req.session.flashMessage = 'Snippet rated'
  res.status(200)
  res.send(rated)
}
