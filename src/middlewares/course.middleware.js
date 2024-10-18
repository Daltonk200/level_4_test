const create = (request, response, next) => {
    const { name, duration, category } = request.body;

    if (!name || !duration || !category) {
        response.status(400).json({
            error: true,
            message: 'Name, duration, and category are required'
        });
        return;
    }

    if (typeof duration !== 'number' || duration <= 0) {
        response.status(400).json({
            error: true,
            message: 'Duration must be a positive number'
        });
        return;
    }

    next();
};


module.exports = { create };
