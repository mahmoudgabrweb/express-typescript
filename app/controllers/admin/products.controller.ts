import {Request, Response, NextFunction} from "express";

exports.index = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/products/index", {title: "All Products", url: "/admin/products"})
};

exports.create = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/products/create", {title: "Add New Product", url: "/admin/products/create"});
};

exports.store = (req: Request, res: Response, next: NextFunction): void => {

};

exports.edit = (req: Request, res: Response, next: NextFunction): void => {
    res.render("admin/products/edit", {title: "Edit Product", url: "/admin/products/:id/edit"});
};

exports.update = (req: Request, res: Response, next: NextFunction): void => {

};

exports.delete = (req: Request, res: Response, next: NextFunction): void => {

};