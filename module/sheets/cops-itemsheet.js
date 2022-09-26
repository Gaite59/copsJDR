export default class COPSItemSheet extends ItemSheet{
    get template(){
        console.log(`COPS | Récupération du fichier HTML templates/item-${this.item.type}.html`);

        return `systems/copsjdr/templates/item-${this.item.type}.html`;
    }

    getData(){
        const data = super.getData();
        console.log(data);

        return data;
    }
}