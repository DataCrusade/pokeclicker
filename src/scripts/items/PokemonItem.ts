/// <reference path="CaughtIndicatingItem.ts" />

class PokemonItem extends CaughtIndicatingItem {

    type: PokemonNameType;

    constructor(pokemon: PokemonNameType, basePrice: number, currency: GameConstants.Currency = GameConstants.Currency.questPoint) {
        super(pokemon, basePrice, currency, undefined, undefined, undefined, 'pokemonItem');
        this.type = pokemon;
    }

    gain(amt: number) {
        let shiny = false;
        for (let i = 0; i < amt; i++) {
            shiny = shiny || PokemonFactory.generateShiny(GameConstants.SHINY_CHANCE_SHOP);
        }
        const pokemonName = this.name as PokemonNameType;

        if (shiny || !App.game.party.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(pokemonName).id)) {
            Notifier.notify({
                message: `${(shiny) ? `✨ You obtained a shiny ${pokemonName}! ✨` : `You obtained ${GameHelper.anOrA(pokemonName)} ${pokemonName}!`}`,
                type: (shiny ? NotificationConstants.NotificationOption.warning : NotificationConstants.NotificationOption.success),
                setting: NotificationConstants.NotificationSetting.General.new_catch,
                sound: ((!App.game.party.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(pokemonName).id) || (shiny && (!App.game.party.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(pokemonName).id, true))) ? NotificationConstants.NotificationSound.General.new_catch : null)),
            });
        }
        if (shiny) {
            App.game.logbook.newLog(LogBookTypes.SHINY, `The purchased ${pokemonName} turned out to be shiny! ${App.game.party.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(pokemonName).id, true) ? '(duplicate)' : ''}`);
        }

        const pokemonID = PokemonHelper.getPokemonByName(pokemonName).id;
        App.game.party.gainPokemonById(pokemonID, shiny, true);

        const partyPokemon = App.game.party.getPokemon(pokemonID);
        partyPokemon.effortPoints += App.game.party.calculateEffortPoints(partyPokemon, shiny, GameConstants.SHOPMON_EP_YIELD);
    }

    getCaughtStatus(): CaughtStatus {
        return PartyController.getCaughtStatusByName(this.name as PokemonNameType);
    }

    get image() {
        const subDirectory = this.imageDirectory ? `${this.imageDirectory}/` : '';
        return `assets/images/items/${subDirectory}${this.name.replace(/[^\s\w.()-]/g, '')}.png`;
    }
}

ItemList.Eevee                = new PokemonItem('Eevee', 4000);
ItemList.Porygon              = new PokemonItem('Porygon', 2000);
ItemList.Jynx                 = new PokemonItem('Jynx', 2000);
ItemList['Mr. Mime']             = new PokemonItem('Mr. Mime', 1000);
ItemList.Lickitung            = new PokemonItem('Lickitung', 1000);
ItemList.Magikarp             = new PokemonItem('Magikarp', 50000, Currency.money);
ItemList.Togepi               = new PokemonItem('Togepi', 15000);
ItemList.Beldum               = new PokemonItem('Beldum', 22500);
ItemList['Pinkan Dodrio']  = new PokemonItem('Pinkan Dodrio', 50000);
ItemList.Skorupi              = new PokemonItem('Skorupi', 6750);
ItemList.Combee               = new PokemonItem('Combee', 6750);
ItemList['Burmy (Plant)']        = new PokemonItem('Burmy (Plant)', 6750);
ItemList.Cherubi              = new PokemonItem('Cherubi', 6750);
ItemList.Spiritomb            = new PokemonItem('Spiritomb', 6750);
ItemList.Zorua                = new PokemonItem('Zorua', 50625);
ItemList['Meloetta (Pirouette)'] = new PokemonItem('Meloetta (Pirouette)', 200000);
ItemList['Furfrou (Debutante)']  = new PokemonItem('Furfrou (Debutante)', 5000000000, Currency.money);
ItemList['Furfrou (Diamond)']    = new PokemonItem('Furfrou (Diamond)', 15000, Currency.diamond);
ItemList['Furfrou (Matron)']     = new PokemonItem('Furfrou (Matron)', 1500000, Currency.farmPoint);
ItemList['Furfrou (Dandy)']      = new PokemonItem('Furfrou (Dandy)', 250000);
ItemList['Furfrou (Kabuki)']     = new PokemonItem('Furfrou (Kabuki)', 75000, Currency.battlePoint);
ItemList['Furfrou (Pharaoh)']    = new PokemonItem('Furfrou (Pharaoh)', 300000000, Currency.dungeonToken);
ItemList['Furfrou (Star)']    = new PokemonItem('Furfrou (Star)', 10000);
ItemList['Type: Null']           = new PokemonItem('Type: Null', 114000);
ItemList.Poipole              = new PokemonItem('Poipole', 90000);
ItemList.Dracozolt              = new PokemonItem('Dracozolt', 100000);
ItemList.Arctozolt              = new PokemonItem('Arctozolt', 100000);
ItemList.Dracovish              = new PokemonItem('Dracovish', 100000);
ItemList.Arctovish              = new PokemonItem('Arctovish', 100000);
