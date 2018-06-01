module.exports = {
    getHouses:(req, res) => {
        const db = req.app.get('db');

        db.get_houses()
        .then( houses => res.status(200).send(houses))
        .catch( () => res.status(500));
    },
    addHouse:(req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip, image, mortgage, rent} = req.body

        db.add_house([name, address, city, state, zip, image, mortgage, rent])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },
    deleteHouse:(req, res) => {
        const db = req.app.get('db');
        const {params} = req;

        db.delete_house([params.id])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    }
}