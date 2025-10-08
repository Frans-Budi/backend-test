import express from "express";
async function init() {
    try {
        const app = express();
        const PORT = 3000;
        app.get("/", (req, res) => {
            res.status(200).json({
                message: "Server is running",
                data: null,
            });
        });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
init();
//# sourceMappingURL=index.js.map