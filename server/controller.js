module.exports = {
    getHouses:(req, res) => {
        const db = req.app.get('db');

        db.get_houses()
        .then( houses => res.status(200).send(houses))
        .catch( () => res.status(500));
    }
}