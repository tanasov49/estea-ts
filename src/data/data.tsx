import { IEvents, IProduct, ILinkAbout } from "../interfaces/interfaces";

export const events:IEvents[] = [
    {title: 'Aktuellt från Estea', date: '1/12 2022', subtitle: 'Estea installerar AI-system för energioptimering i Forskaren', link: '#', place: 'Visa alla'},
    {title: 'Pressmeddelanden', date: '19/12 2022', subtitle: 'Estea Omsorgsfastigheter AB (publ) pausar ränteutbetalning', link: '#', place: 'Visa alla'},
    {title: 'Kommande händelser', date: '10/2 2023', subtitle: 'Bokslutskommuniké 2022 Estea Omsorgsfastigheter', link: '#', place: 'Visa alla'},
]
export const productEstea:IProduct = 
    {name: 'Estea Omsorgsfastigheter AB (publ)', year: '2019', power: '5 år', income: '8-10 procent per år', application: '4 procent per år med kvartalsvis utbetalning*', note: 'Nasdaq Stockholm', properties: '43', dimensions: '78 466 kvm', payment: '*Ackumuleras från och med 10 april 2023 för utbetalning vid senare utvisat tillfälle', payback: '110,5 procent', date: 'Uppgifter per 2022-09-30. Nyckeltal baseras på data från senast publicerad rapport.'}
export const linksAbout:ILinkAbout[] = [
    {title: 'Mer om Estea Omsorgsfastigheter', link: '#'},
    {title: 'Börsrum för Estea Omsorgsfastigheter', link: '#'},
    {title: 'Läs mer om hur du investerar', link: '#'}
]
    
