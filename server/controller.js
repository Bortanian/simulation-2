module.exports = {
    getHouses:(req, res) => {
        const db = req.app.get('db');

        db.get_houses()
        .then( houses => res.status(200).send(houses))
        .catch( () => res.status(500));
    },
    addHouse:(req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip} = req.body

        db.add_house([name, address, city, state, zip])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    }
}