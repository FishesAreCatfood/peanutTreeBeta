let lore_data = {
    tips: {
        id: "tips",
        title: "Useful Tips",
        text: `<ol>
        <li>If you have to click something a lot of times, try to instead just click it once and hold down enter.
        This will make the button be autoclicked so that you don't have to spam it</li>
        </ol>`,
        unlocked() {
            return true
        },
    },
    c: {
        id: "c",
        title: "Coins",
        text: `
            While walking back home from the grocery store today, you find a peanut seed laying on the ground.
            Not thinking too much about it, you pick it up and put it in your pocket, thinking to yourself that you could maybe grow it in your backyard.
            But when planting the seed in the ground, you can't help but feel that this might be the beginning of a great adventure.
        `,
        unlocked() {
            return player.a.achievements.length > 0
        },
    },
    f: {
        id: "f",
        title: "Farms",
        text: `
        You've finally scraped together enough money for a farm.
        The farm isn't big, but with this new land, you're going to be able to expand your peanut fields a lot further.
        Maybe one day you'll even own multiple farms?
        `,
        unlocked() {
            return player.f.unlocked
        },
    },
    sg: {
        id: "sg",
        title: "Sapling Generators",
        text: `
        You heard of these new "sapling generator" machines and decided to buy one.
        You are still a bit sceptical about if it will work or not, since the whole thing sounds kinda magical.
        Nevertheless, you push the button, and after a few seconds of work, it spits out a completely fresh peanut sapling.
        You think to yourself that you're going to have to buy more of these.
        `,
        unlocked() {
            return player.sg.unlocked
        },
    },
    t: {
        id: "t",
        title: "Towns",
        text: `
        After having built quite a few farms, you come up with the idea of starting a town around it to attract more workers to the farms.
        This works out much better than you had expected, and the town is filled up in no more than a week.
        Maybe this could be the new step in growing your peanut production.
        `,
        unlocked() {
            return player.t.unlocked
        },
    },
    fa: {
        id: "fa",
        title: "Factories",
        text: `
        Maintaining all these sapling generators requires quite a lot of work...
        After wondering about what to do about it for a while, you decide to build a factory and hire workers to manage them for you.
        Maybe you could even build multiple factories when your peanut production gets big enough?
        `,
        unlocked() {
            return player.fa.unlocked
        },
    },
    ms: {
        id: "ms",
        title: "MSPaintium",
        text: `
        While wandering around in one of your towns, you spot a strange-looking, colorful rock laying on the ground.
        You pick it up, wondering what it could be and how it got there.
        After taking it to one of your factories for a scan, you deduce that this might be one of the keys to expanding your peanut production further.
        `,
        unlocked() {
            return player.ms.unlocked
        },
    },
    n: {
        id: "n",
        title: "Nations",
        text: `
        Having built all these towns, you decide to found a nation to keep even more control of the area.
        The nation is not very large, but its economy continues to flourish, due to your ever-growing peanut empire.
        The workers have even asked to be paid im peanuts instead of coins!
        `,
        unlocked() {
            return player.n.unlocked
        },
    },
    nr: {
        id: "nr",
        title: "Researchers",
        text: `
        After founding a few nations and wondering how you could exploit them to boost your peanut production further,
        you come up with the idea of sending researchers to different zones, both inside and outside your nations.
        The researchers will be tasked to study the zones, to then come back and use that knowledge to further develop your peanut empire!
        `,
        unlocked() {
            return player.n.points.gte(3)
        },
    },
    b: {
        id: "b",
        title: "Bot Parts",
        text: `
        The factories were a great solution to your sapling generator problem,
        but now you have a myriad of workers that all need to be paid, fed and have a place to live.
        To solve this problem, you decide to look into automation, and maybe build some bots to do all the work instead.
        Yes, you might destroy the livelyhood of millions of factory workers,
        but you convince yourself that the increased peanut production is definitely worth it.
        `,
        unlocked() {
            return player.b.unlocked
        },
    },
    s: {
        id: "s",
        title: "Spells",
        text: `
        When attempting to crush some mspaintium in your newly built crusher, you notice that the dust has certain magical properties.
        You send scouts through your different nations to bring back all the wizards they can find.
        The wizards will the be tasked with utilizing the dust to cast powerful spells that will help to grow your peanut empire.
        `,
        unlocked() {
            return player.s.unlocked
        },
    },
    l: {
        id: "l",
        title: "Lunar Colonies",
        text: `
        Following the destruction of the last countries on Earth trying to resist your growing empire,
        you decide to look to space for new places to grow your peanut production.
        You build a spaceship and send a brave explorer to the moon, to see if this idea would actually be possible.
        Just as you hoped for, the explorer reaches the moon, and the first of many lunar colonies, has been established.
        `,
        unlocked() {
            return player.l.unlocked
        },
    },
    p: {
        id: "p",
        title: "Planets",
        text: `
        Seeing how the lunar colonies worked out pretty much perfectly, you begin preparing your plans for colonizing the rest of the solar system.
        With no one left on earth that is powerful enough to stop you,
        you allocate the rest of the planet's resources to finding a way to achieve this goal of yours.
        `,
        unlocked() {
            return player.p.unlocked
        },
    },
    ab: {
        id: "ab",
        title: "Abominatium",
        text: `
        In one of the few jungles left on the planet that have yet to be turned into peanut fields,
        one of your researchers discover a previously unknown material with a few strange properties.
        Upon touching the material, the researcher transforms into an abominable creature, growing a few extra limbs,
        in addition to other mutations all around his body. His intelligence and behaviour did not change though,
        and further tests show that the material can react with basically any object it touches,
        turning them into different creatures with varying abilities.
        You decide to name these creatures "Abominations" and look into ways to use them to grow your peanut empire.
        `,
        unlocked() {
            return player.ab.unlocked
        },
    },
    abd: {
        id: "abd",
        title: "Davzatium",
        text: `
        Further tests of the material shows that it contains a substance that you decide to call "Davzatium" (after the researcher that discovered it).
        It is able to both create new abominations from any object, but also improve the abilities of the already existing ones.
        You quickly create an abomination with the ability to extract this substance, before using it to create and improve more abominations.
        `,
        unlocked() {
            return hasUpgrade("ab", 14)
        },
    },
    o: {
        id: "o",
        title: "Ocean",
        text: `
        Having colonized a few planets and created some Abominations, you decide to look back to the Earth,
        wondering if there are still places your peanut empire has yet to reach.
        You then remember the vast oceans, covering 71% of the planet.
        You decide to build a submarine and send a few researchers down to the deep, to uncover new knowledge from the ocean.
        `,
        unlocked() {
            return player.o.unlocked
        },
    },
}