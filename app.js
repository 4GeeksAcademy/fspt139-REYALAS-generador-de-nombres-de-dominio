let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extenciones = [`.com`, `.net`, `.us`, `.io`, `.etc`]

for (let index = 0; index < pronoun.length; index++) {
    const elementpronoun = pronoun[index];


    for (let index = 0; index < adj.length; index++) {
        const elementadj = adj[index];

        for (let index = 0; index < noun.length; index++) {
            const elementnoun = noun[index];

            for (let index = 0; index < extenciones.length; index++) {
                const elementextenciones = extenciones[index];

                console.log(elementpronoun + elementadj + elementnoun + elementextenciones)

            }

        }

    }

}
