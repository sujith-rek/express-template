import { Request, Response, NextFunction } from "express";

function interceptor() {
    return function(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Headers:", req.headers);
            console.log("Method:", req.method);
            console.log("URL:", req.url);
            next();
        } catch (error) {
            console.error("Error in interceptor middleware:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

export default interceptor;