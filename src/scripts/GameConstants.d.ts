/**
 * If you are attempting to modify a GameConstant, please update
 * `./src/modules/GameConstants.ts` instead. If you add or remove a constant,
 * please ensure you add a matching type declaration in here.
 *
 * This file is temporary while code is ported to TypeScript modules. Due to
 * differences between how namespaces and modules work, it is easiest if we
 * have the namespace manually defined to ensure we don't need to implement
 * as many changes or hacks during migration.
 *
 * In order to avoid assigning values in this file, we let the constant assume
 * that numeric enums increment, and we define every string-typed enum an
 * empty string '' value so that the types pass.
 */

namespace GameConstants {
    declare const SECOND: number;
    declare const MINUTE: number;
    declare const HOUR: number;
    declare const DAY: number;
    declare const TICK_TIME: number;
    declare const BATTLE_TICK: number;
    declare const BATTLE_FRONTIER_TICK: number;
    declare const UNDERGROUND_TICK: number;
    declare const DUNGEON_TIME: number;
    declare const DUNGEON_TICK: number;
    declare const EFFECT_ENGINE_TICK: number;
    declare const SAVE_TICK: number;
    declare const GYM_TIME: number;
    declare const GYM_COUNTDOWN: number;
    declare const GYM_TICK: number;
    declare const ACHIEVEMENT_TICK: number;
    declare const MIN_LOAD_TIME: number;
    declare const MAX_LOAD_TIME: number;
    declare const MUTATION_TICK: number;
    declare const WANDER_TICK: number;
    declare const TEMP_BATTLE_TIME: number;
    declare const TEMP_BATTLE_TICK: number;
    declare const MAX_AVAILABLE_REGION: number;
    declare const MaxIDPerRegion: number[];
    declare const ITEM_USE_TIME: number;
    declare const FLUTE_TYPE_ATTACK_MULTIPLIER: number;
    declare const ROAMING_MIN_CHANCE: number;
    declare const ROAMING_MAX_CHANCE: number;
    declare const SHINY_CHANCE_BATTLE: number;
    declare const SHINY_CHANCE_DUNGEON: number;
    declare const SHINY_CHANCE_SHOP: number;
    declare const SHINY_CHANCE_STONE: number;
    declare const SHINY_CHANCE_SAFARI: number;
    declare const SHINY_CHANCE_BREEDING: number;
    declare const SHINY_CHANCE_FARM: number;
    declare const ITEM_PRICE_MULTIPLIER: number;
    declare const ITEM_PRICE_DEDUCT: number;
    declare const PLATE_VALUE: number;
    declare const BREEDING_ATTACK_BONUS: number;
    declare const FARM_PLOT_WIDTH: number;
    declare const FARM_PLOT_HEIGHT: number;
    declare const BerryDistribution: number[];
    declare const MULCH_USE_TIME: number;
    declare const BOOST_MULCH_MULTIPLIER: number;
    declare const RICH_MULCH_MULTIPLIER: number;
    declare const SURPRISE_MULCH_MULTIPLIER: number;
    declare const AMAZE_MULCH_GROWTH_MULTIPLIER: number;
    declare const AMAZE_MULCH_PRODUCE_MULTIPLIER: number;
    declare const AMAZE_MULCH_MUTATE_MULTIPLIER: number;
    declare const FREEZE_MULCH_MULTIPLIER: number;
    declare const WANDER_RATE: number;
    declare const BerryColor: string[];
    declare const BASE_DUNGEON_SIZE: number;
    declare const MIN_DUNGEON_SIZE: number;
    declare const DUNGEON_CHEST_SHOW: number;
    declare const DUNGEON_MAP_SHOW: number;
    declare enum AchievementOption {
        less,
        equal,
        more,
    }

    declare enum AchievementType {
        'None',
        'Money',
        'Token',
        'Attack',
        'Diamond',
        'Underground Items Found',
        'Underground Layers Mined',
        'Max Level Oak Item',
        'Captured',
        'Defeated',
        'Caught Pokemon',
        'Shiny Pokemon',
        'Hatch',
        'Pokeball',
        'Click',
        'Route Defeat',
        'Clear Gym',
        'Clear Dungeon',
        'Farming',
        'Quest',
        'Battle Frontier',
        'Protein'
    }
    declare enum DungeonTile {
        empty,
        entrance,
        enemy,
        chest,
        boss,
    }
    declare const ROUTE_HELD_ITEM_MODIFIER: number;
    declare const DUNGEON_HELD_ITEM_MODIFIER: number;
    declare const DUNGEON_BOSS_HELD_ITEM_MODIFIER: number;
    declare const HELD_ITEM_CHANCE: number;
    declare const HELD_UNDERGROUND_ITEM_CHANCE: number;
    declare const GEM_UPGRADE_COST: number;
    declare const GEM_UPGRADE_STEP: number;
    declare const MAX_GEM_UPGRADES: number;
    declare const DUNGEON_GEMS: number;
    declare const DUNGEON_BOSS_GEMS: number;
    declare const GYM_GEMS: number;
    declare const SAFARI_BATTLE_CHANCE: number;
    declare const SAFARI_BASE_POKEBALL_COUNT: number;
    declare const LEGAL_WALK_BLOCKS: number[];
    declare const SAFARI_OUT_OF_BALLS: string;
    declare const GAIN_MONEY_BASE_REWARD: number;
    declare const HATCH_EGGS_BASE_REWARD: number;
    declare const SHINY_BASE_REWARD: number;
    declare const DEFEAT_POKEMONS_BASE_REWARD: number;
    declare const CAPTURE_POKEMONS_BASE_REWARD: number;
    declare const GAIN_TOKENS_BASE_REWARD: number;
    declare const GAIN_FARM_POINTS_BASE_REWARD: number;
    declare const MINE_LAYERS_BASE_REWARD: number;
    declare const MINE_ITEMS_BASE_REWARD: number;
    declare const USE_OAK_ITEM_BASE_REWARD: number;
    declare const ACTIVE_QUEST_MULTIPLIER: number;
    declare const QUEST_CLICKS_PER_SECOND: number;
    declare const QUESTS_PER_SET: number;
    declare const BASE_EP_YIELD: number;
    declare const STONE_EP_YIELD: number;
    declare const WANDERER_EP_YIELD: number;
    declare const SHOPMON_EP_YIELD: number;
    declare const SAFARI_EP_YIELD: number;
    declare const SHINY_EP_MODIFIER: number;
    declare const REPEATBALL_EP_MODIFIER: number;
    declare const DUNGEON_EP_MODIFIER: number;
    declare const DUNGEON_BOSS_EP_MODIFIER: number;
    declare const ROAMER_EP_MODIFIER: number;
    declare const EP_EV_RATIO: number;
    declare const EP_CHALLENGE_MODIFIER: number;
    declare const DNA_ITEM_CHANCE: number;
    declare enum GameState {
        idle,
        paused,
        fighting,
        gym,
        dungeon,
        safari,
        town,
        shop,
        battleFrontier,
        temporaryBattle
    }
    declare enum Pokeball {
        'None',
        'Pokeball',
        'Greatball',
        'Ultraball',
        'Masterball',
        'Fastball',
        'Quickball',
        'Timerball',
        'Duskball',
        'Luxuryball',
        'Diveball',
        'Lureball',
        'Nestball',
        'Repeatball',
        'Beastball',
    }
    declare enum Currency {
        money,
        questPoint,
        dungeonToken,
        diamond,
        farmPoint,
        battlePoint,
    }
    declare enum TypeEffectiveness {
        Immune,
        NotVery,
        Neutral,
        Very
    }
    declare enum TypeEffectivenessValue {
        Immune,
        NotVery,
        Neutral,
        Very
    }
    declare function humanifyString(str: string): string;
    declare function camelCaseToString(str: string): string;
    declare function formatDate(date: Date): string;
    declare function formatTime(input: number | Date): string;
    declare function formatTimeFullLetters(input: number): string;
    declare function formatTimeShortWords(input: number): string;
    declare function formatSecondsToTime(input: number): string;
    declare function formatNumber(input: number): string;
    declare enum Region {
        none,
        kanto,
        johto,
        hoenn,
        sinnoh,
        unova,
        kalos,
        alola,
        galar,
        final,
    }
    declare function clipNumber(num: number, min: number, max: number): number;
    declare function expRandomElement<T>(array: T[], ratio: number): T;
    declare const TypeColor: string[];
    declare const ROUTE_KILLS_NEEDED: number;
    declare const ACHIEVEMENT_DEFEAT_ROUTE_VALUES: number[];
    declare const ACHIEVEMENT_DEFEAT_GYM_VALUES: number[];
    declare const ACHIEVEMENT_DEFEAT_DUNGEON_VALUES: number[];
    declare type EnvironmentData = Partial<Record<number, Set<string | number>>>
    declare const Environments: {
        Water: EnvironmentData,
        Ice: EnvironmentData,
        Fire: EnvironmentData,
        Forest: EnvironmentData,
        Cave: EnvironmentData,
        GemCave: EnvironmentData,
        PowerPlant: EnvironmentData,
        Mansion: EnvironmentData,
        Graveyard: EnvironmentData,
    };
    declare type Environment = keyof typeof Environments;
    declare const EnvironmentCssClass:Record<Environment, string>;
    declare enum Starter {
        'None' = '',
        'Bulbasaur',
        'Charmander',
        'Squirtle',
        'Pikachu'
    }
    declare enum StoneType {
        'None',
        'Leaf_stone',
        'Fire_stone',
        'Water_stone',
        'Thunder_stone',
        'Moon_stone',
        'Linking_cord',
        'Sun_stone',
        'Soothe_bell',
        'Metal_coat',
        'Kings_rock',
        'Upgrade',
        'Dragon_scale',
        'Prism_scale',
        'Deepsea_tooth',
        'Deepsea_scale',
        'Shiny_stone',
        'Dusk_stone',
        'Dawn_stone',
        'Razor_claw',
        'Razor_fang',
        'Electirizer',
        'Magmarizer',
        'Protector',
        'Dubious_disc',
        'Reaper_cloth',
        'Black_DNA',
        'White_DNA',
        'Sachet',
        'Whipped_dream',
        'Ice_stone',
        'Sweet_apple',
        'Tart_apple',
        'Cracked_pot',
        'Galarica_cuff',
        'Galarica_wreath',
    }
    declare enum ShardType {
        'None',
        'Red Shard',
        'Yellow Shard',
        'Green Shard',
        'Blue Shard',
        'Grey Shard',
        'Purple Shard',
        'Ochre Shard',
        'Black Shard',
        'Crimson Shard',
        'Lime Shard',
        'White Shard',
        'Pink Shard',
        'Cyan Shard',
        'Rose Shard',
        'Brown Shard',
    }
    declare enum FossilPieceType {
        'None',
        'Fossilized Bird',
        'Fossilized Fish',
        'Fossilized Drake',
        'Fossilized Dino',
    }
    declare enum BattleItemType {
        'xAttack' = '',
        'xClick' = '',
        'Lucky_egg' = '',
        'Token_collector' = '',
        'Dowsing_machine' = '',
        'Lucky_incense' = '',
    }
    declare enum FluteItemType {
        'Yellow_Flute' = '',
        'Time_Flute' = '',
        'Black_Flute' = '',
        'Red_Flute' = '',
        'White_Flute' = '',
        'Blue_Flute' = '',
        //'Poke_Flute' = '',
        //'Azure_Flute' = '',
        //'Eon_Flute' = '',
        //'Sun_Flute' = '',
        //'Moon_Flute' = '',
        //'Grass_Flute' = '',
    }
    declare enum PokemonItemType {
        'Eevee',
        'Porygon',
        'Jynx',
        'Mr. Mime',
        'Lickitung',
        'Togepi',
        'Beldum',
        'Pinkan Dodrio',
        'Skorupi',
        'Combee',
        'Burmy (plant)',
        'Spiritomb',
        'Cherubi',
        'Zorua',
        'Meloetta (pirouette)',
        'Type: Null',
        'Poipole',
        'Dracozolt',
        'Arctozolt',
        'Dracovish',
        'Arctovish',
    }

    declare enum UltraBeastType {
         'Nihilego',
         'Buzzwole',
         'Pheromosa',
         'Xurkitree',
         'Kartana',
         'Celesteela',
         'Blacephalon',
         'Stakataka',
         'Guzzlord',
         'Poipole',
         'Naganadel'
     }

    declare enum PokeBlockColor {
        Black,
        Red,
        Gold,
        Purple,
        Gray,
        White
    }
    declare enum VitaminType {
        Protein,
        RareCandy
    }
    declare enum EnergyRestoreSize {
        SmallRestore,
        MediumRestore,
        LargeRestore
    }
    declare enum EggItemType {
        'Fire_egg',
        'Water_egg',
        'Grass_egg',
        'Fighting_egg',
        'Electric_egg',
        'Dragon_egg',
        'Pokemon_egg',
        'Mystery_egg'
    }
    export enum BulletinBoards {
        None = -2,
        All = -1,
        Kanto,
        Johto,
        Hoenn,
        Kalos,
        Alola,
        Galar,
        Armor,
        Crown
    }
    declare const EnergyRestoreEffect: {
        SmallRestore: number;
        MediumRestore: number;
        LargeRestore: number;
    };
    declare const FossilToPokemon: {
        'Helix Fossil': string;
        'Dome Fossil': string;
        'Old Amber': string;
        'Root Fossil': string;
        'Claw Fossil': string;
        'Armor Fossil': string;
        'Skull Fossil': string;
        'Cover Fossil': string;
        'Plume Fossil': string;
        'Jaw Fossil': string;
        'Sail Fossil': string;
    };
    declare const PokemonToFossil: {
        Omanyte: string;
        Kabuto: string;
        Aerodactyl: string;
        Lileep: string;
        Anorith: string;
        Shieldon: string;
        Cranidos: string;
        Tirtouga: string;
        Archen: string;
        Tyrunt: string;
        Amaura: string;
    };
    declare const KantoGyms: string[];
    declare const JohtoGyms: string[];
    declare const HoennGyms: string[];
    declare const SinnohGyms: string[];
    declare const UnovaGyms: string[];
    declare const KalosGyms: string[];
    declare const GalarGyms: string[];
    declare const OrangeGyms: string[];
    declare const RegionGyms: string[][];
    declare function getGymIndex(gym: string): number;
    declare function getGymRegion(gym: string): Region;
    declare const KantoDungeons: string[];
    declare const JohtoDungeons: string[];
    declare const HoennDungeons: string[];
    declare const SinnohDungeons: string[];
    declare const UnovaDungeons: string[];
    declare const KalosDungeons: string[];
    declare const GalarDungeons: string[];
    declare const RegionDungeons: string[][];
    declare function getDungeonIndex(dungeon: string): number;
    declare function getDungeonRegion(dungeon: string): Region;
    declare const StartingTowns: string[];
    declare const StartingRoutes: number[];
    declare const DockTowns: string[];
    declare const RegionalStarters: number[][];
    declare const TemporaryBattles: string[];
    declare function getTemporaryBattlesIndex(temporaryBattle: string): number;
    declare enum DayOfWeek {
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    }
    declare enum Pokerus {
        'Uninfected',
        'Infected',
        'Contagious',
        'Resistant',
    }
    declare enum ShardTraderLocations {
        'Cerulean City',
        'Vermilion City',
        'Lavender Town',
        'Saffron City',
        'Fuchsia City',
        'Cinnabar Island',
        'Azalea Town',
        'Ecruteak City',
        'Olivine City',
        'Cianwood City',
        'Mahogany Town',
        'Blackthorn City',
        'Petalburg City',
        'Dewford Town',
        'Slateport City',
        'Mauville City',
        'Verdanturf Town',
        'Lavaridge Town',
        'Fallarbor Town',
        'Fortree City',
        'Mossdeep City',
        'Pacifidlog Town',
        'Sootopolis City',
        'Ever Grande City',
        'Oreburgh City',
        'Floaroma Town',
        'Eterna City',
        'Hearthome City',
        'Solaceon Town',
        'Pastoria City',
        'Celestic Town',
        'Pal Park',
        'Canalave City',
        'Snowpoint City',
        'Sunyshore City',
        'Survival Area',
        'Resort Area',
        'Castelia City',
        'Nimbasa City',
        'Driftveil City',
        'Mistralton City',
        'Lentimas Town',
        'Undella Town',
        'Lacunosa Town',
        'Opelucid City',
        'Humilau City',
        'Icirrus City',
        'Black and White Park',
        'Nacrene City',
        'Striaton City',
        'Accumula Town',
        'Nuvema Town',
        'Camphrier Town',
        'Parfum Palace',
        'Ambrette Town',
        'Cyllage City',
        'Geosenge Town',
        'Shalour City',
        'Coumarine City',
        'Laverre City',
        'Dendemille Town',
        'Anistar City',
        'Couriway Town',
        'Snowbelle City',
        'Hau\'oli City',
        'Heahea City',
        'Paniola Town',
        'Konikoni City',
        'Aether Paradise',
        'Malie City',
        'Tapu Village',
        'Seafolk Village',
        'Exeggutor Island',
        'Altar of the Sunne and Moone',
        'Turffield',
        'Hulbury',
        'Motostoke',
        'Hammerlocke',
        'Route 6',
        'Stow-on-Side',
        'Ballonlea',
        'Circhester',
        'Spikemuth',
        'Master Dojo',
    }
    declare enum KantoSubRegions {
        Kanto,
        Sevii123,
        Sevii4567,
    }
    declare enum JohtoSubRegions {
        Johto,
    }
    declare enum HoennSubRegions {
        Hoenn,
    }
    declare enum SinnohSubRegions {
        Sinnoh,
    }
    declare enum UnovaSubRegions {
        Unova,
    }
    declare enum KalosSubRegions {
        Kalos,
    }
    declare enum AlolaSubRegions {
        MelemeleIsland,
        AkalaIsland,
        UlaulaAndPoniIslands,
        // UlaulaIsland,
        // PoniIsland,
    }
    declare enum GalarSubRegions {
        SouthGalar,
        NorthGalar,
        IsleofArmor,
        CrownTundra,
    }
}
