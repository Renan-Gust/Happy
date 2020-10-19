const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {


    //Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistências a crianças de 06 a 15 anos que se enconter em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9894944232232",
        images: [
            "https://images.unsplash.com/photo-1596962248954-a0381dc10a20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601180964280-88c506668304?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência par dar.",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar some 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //Deletar dados da tabela
  /*console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))*/
})