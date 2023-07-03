import {Request, Response, NextFunction} from "express";

exports.index = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/posts/index", {title: "All Posts", url: "/admin/posts"});
}

exports.create = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/posts/create", {title: "Add New Post", url: "/admin/posts/create"});
}

exports.store = (req: Request, res: Response, next: NextFunction): void => {

}

exports.edit = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/posts/edit", {title: "Edit Post", url: "/admin/posts/:id/edit"});
}

exports.update = (req: Request, res: Response, next: NextFunction): void => {

}

exports.delete = (req: Request, res: Response, next: NextFunction): void => {

}