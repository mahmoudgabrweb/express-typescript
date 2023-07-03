import {NextFunction, Request, Response} from "express";

exports.error404 = (req: Request, res: Response, next: NextFunction): void => {
    res.render("404", {pageTitle: "Error 404", path: "/404"})
}

exports.handleError = (err: any, req: Request, res: Response, next: NextFunction): void => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}