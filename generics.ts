function simpleState<Unicorn>(
    initial: Unicorn
): [() => Unicorn, (v: Unicorn) => void] {
    let str: Unicorn = initial;
    return[
        ()=> str,
        (v: Unicorn)=> {
            str = v;
        },
    ];
}

const [lastName, setLastName] = simpleState(10);
console.log(lastName());
setLastName(52)
console.log(lastName());

const [email, setEmail] = simpleState<string | null>(null);
console.log(email());
setEmail("str")
console.log(email());

interface Rank<RankItem>{
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[]{

    const ranks : Rank<RankItem>[] = items.map(item=>({
        item,
        rank: rank(item)
    }));

    ranks.sort((a,b)=>a.rank - b.rank);

    return ranks.map(rank=> rank.item);

}

// interface Pokemon {
//     name: string;
//     hp: number;
// }

// const pokemon: Pokemon[] = [
//     {
//         name: "Charmander",
//         hp: 50
//     },
//     {
//         name: "Lapras",
//         hp: 80
//     }
// ]

// const ranks = ranker(pokemon, ({hp})=>hp)
// console.log(ranks);