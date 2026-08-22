export type Match={id:number;date:string;stage:string;home:string;away:string;score:string};

const groupTeams=[
  ['Mexico','South Africa','Korea Republic','Czechia','Czechia','South Africa','Mexico','Korea Republic','Czechia','Mexico','South Africa','Korea Republic'],
  ['Canada','Bosnia and Herzegovina','Qatar','Switzerland','Switzerland','Bosnia and Herzegovina','Canada','Qatar','Bosnia and Herzegovina','Qatar','Switzerland','Canada'],
  ['Brazil','Morocco','Haiti','Scotland','Scotland','Morocco','Brazil','Haiti','Morocco','Haiti','Scotland','Brazil'],
  ['USA','Paraguay','Australia','Türkiye','USA','Australia','Türkiye','Paraguay','Türkiye','USA','Paraguay','Australia'],
  ['Germany','Curaçao',"Côte d'Ivoire",'Ecuador','Germany',"Côte d'Ivoire",'Ecuador','Curaçao','Ecuador','Germany','Curaçao',"Côte d'Ivoire"],
  ['Netherlands','Japan','Sweden','Tunisia','Netherlands','Sweden','Tunisia','Japan','Japan','Sweden','Tunisia','Netherlands'],
  ['Belgium','Egypt','IR Iran','New Zealand','Belgium','IR Iran','New Zealand','Egypt','Egypt','IR Iran','New Zealand','Belgium'],
  ['Spain','Cabo Verde','Saudi Arabia','Uruguay','Spain','Saudi Arabia','Uruguay','Cabo Verde','Uruguay','Spain','Cabo Verde','Saudi Arabia'],
  ['France','Senegal','Iraq','Norway','France','Iraq','Norway','Senegal','Norway','France','Senegal','Iraq'],
  ['Argentina','Algeria','Austria','Jordan','Argentina','Austria','Jordan','Algeria','Jordan','Argentina','Algeria','Austria'],
  ['Portugal','Congo DR','Uzbekistan','Colombia','Portugal','Uzbekistan','Colombia','Congo DR','Congo DR','Uzbekistan','Colombia','Portugal'],
  ['England','Croatia','Ghana','Panama','England','Ghana','Panama','Croatia','Panama','England','Croatia','Ghana'],
];
const groupScores=[
  ['2–0','2–1','1–1','1–0','0–3','1–0'],['1–1','1–1','4–1','6–0','3–1','2–1'],
  ['1–1','0–1','0–1','3–0','4–2','0–3'],['4–1','2–0','2–0','0–1','3–2','0–0'],
  ['7–1','1–0','2–1','0–0','2–1','0–2'],['2–2','5–1','5–1','0–4','1–1','1–3'],
  ['1–1','2–2','0–0','1–3','1–1','1–5'],['0–0','1–1','4–0','2–2','0–1','0–0'],
  ['3–1','1–4','3–0','3–2','1–4','5–0'],['3–0','3–1','2–0','1–2','1–3','3–3'],
  ['1–1','1–3','5–0','1–0','3–1','0–0'],['4–2','1–0','0–0','0–1','0–2','2–1'],
];
const groupDates=['11 Jun','11 Jun','12 Jun','12 Jun','13 Jun','13 Jun','13 Jun','13 Jun','14 Jun','14 Jun','14 Jun','14 Jun','15 Jun','15 Jun','15 Jun','15 Jun','16 Jun','16 Jun','16 Jun','16 Jun','17 Jun','17 Jun','17 Jun','17 Jun','18 Jun','18 Jun','18 Jun','18 Jun','19 Jun','19 Jun','19 Jun','19 Jun','20 Jun','20 Jun','20 Jun','20 Jun','21 Jun','21 Jun','21 Jun','21 Jun','22 Jun','22 Jun','22 Jun','22 Jun','23 Jun','23 Jun','23 Jun','23 Jun','24 Jun','24 Jun','24 Jun','24 Jun','24 Jun','24 Jun','25 Jun','25 Jun','25 Jun','25 Jun','25 Jun','25 Jun','26 Jun','26 Jun','26 Jun','26 Jun','26 Jun','26 Jun','27 Jun','27 Jun','27 Jun','27 Jun','27 Jun','27 Jun'];

export const groupMatches:Match[]=groupTeams.flatMap((teams,g)=>Array.from({length:6},(_,i)=>({
  id:g*6+i+1,date:groupDates[g*6+i],stage:`Group ${String.fromCharCode(65+g)}`,
  home:teams[i*2],away:teams[i*2+1],score:groupScores[g][i],
})));

const koRaw:Array<[number,string,string,string,string,string]>=[
  [73,'28 Jun','Round of 32','South Africa','Canada','0–1'],[74,'29 Jun','Round of 32','Germany','Paraguay','1–1 (3–4p)'],[75,'29 Jun','Round of 32','Netherlands','Morocco','1–1 (2–3p)'],[76,'29 Jun','Round of 32','Brazil','Japan','2–1'],
  [77,'30 Jun','Round of 32','France','Sweden','3–0'],[78,'30 Jun','Round of 32',"Côte d'Ivoire",'Norway','1–2'],[79,'30 Jun','Round of 32','Mexico','Ecuador','2–0'],[80,'1 Jul','Round of 32','England','Congo DR','2–1'],
  [81,'1 Jul','Round of 32','USA','Bosnia and Herzegovina','2–0'],[82,'1 Jul','Round of 32','Belgium','Senegal','3–2 AET'],[83,'2 Jul','Round of 32','Portugal','Croatia','2–1'],[84,'2 Jul','Round of 32','Spain','Austria','3–0'],
  [85,'2 Jul','Round of 32','Switzerland','Algeria','2–0'],[86,'3 Jul','Round of 32','Argentina','Cabo Verde','3–2 AET'],[87,'3 Jul','Round of 32','Colombia','Ghana','1–0'],[88,'3 Jul','Round of 32','Australia','Egypt','1–1 (2–4p)'],
  [89,'4 Jul','Round of 16','Paraguay','France','0–1'],[90,'4 Jul','Round of 16','Canada','Morocco','0–3'],[91,'5 Jul','Round of 16','Brazil','Norway','1–2'],[92,'5 Jul','Round of 16','Mexico','England','2–3'],
  [93,'6 Jul','Round of 16','Portugal','Spain','0–1'],[94,'6 Jul','Round of 16','USA','Belgium','1–4'],[95,'7 Jul','Round of 16','Argentina','Egypt','3–2'],[96,'7 Jul','Round of 16','Switzerland','Colombia','0–0 (4–3p)'],
  [97,'9 Jul','Quarter-finals','France','Morocco','2–0'],[98,'10 Jul','Quarter-finals','Spain','Belgium','2–1'],[99,'11 Jul','Quarter-finals','Norway','England','1–2 AET'],[100,'11 Jul','Quarter-finals','Argentina','Switzerland','3–1 AET'],
  [101,'14 Jul','Semi-finals','France','Spain','0–2'],[102,'15 Jul','Semi-finals','England','Argentina','1–2'],[103,'18 Jul','Third place','France','England','4–6'],[104,'19 Jul','Final','Spain','Argentina','1–0 AET'],
];
export const knockoutMatches:Match[]=koRaw.map(([id,date,stage,home,away,score])=>({id,date,stage,home,away,score}));
export const allMatches=[...groupMatches,...knockoutMatches];

export const flagCodes:Record<string,string>={
  Mexico:'mx','South Africa':'za','Korea Republic':'kr',Czechia:'cz',Canada:'ca','Bosnia and Herzegovina':'ba',Qatar:'qa',Switzerland:'ch',Brazil:'br',Morocco:'ma',Scotland:'gb-sct',Haiti:'ht',USA:'us',Paraguay:'py',Australia:'au','Türkiye':'tr',Germany:'de',"Côte d'Ivoire":'ci',Ecuador:'ec','Curaçao':'cw',Netherlands:'nl',Japan:'jp',Sweden:'se',Tunisia:'tn',Belgium:'be',Egypt:'eg','IR Iran':'ir','New Zealand':'nz',Spain:'es','Cabo Verde':'cv',Uruguay:'uy','Saudi Arabia':'sa',France:'fr',Norway:'no',Senegal:'sn',Iraq:'iq',Argentina:'ar',Austria:'at',Algeria:'dz',Jordan:'jo',Portugal:'pt','Congo DR':'cd',Uzbekistan:'uz',Colombia:'co',England:'gb-eng',Croatia:'hr',Ghana:'gh',Panama:'pa'
};
