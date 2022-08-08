function moyeuPlus(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="<ul>"+
						"<li>Les vitesses ne sont pas indexées sur la transmission d'origine de ces vélos, ce qui crée un risaue de déraillage important. Les utilisateurs de VAE attendent une meilleure prestation. C'est pour cette raison que la transmission est systématiquement remplacée par un moyeu à vitesses intégrées qui permet : </li><br>"+
						"<li>de ne jamais dérailler</li>"+
						"<li>de passer les vitesses à l'arrêt</li>"+
						"<li>de limiter l'entretien à réaliser</li>"+
  "<li>d'épurer la ligne du vélo en supprimant les dérailleurs </li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function moyeuMoins(){
	var txt = document.getElementById("textMoyeu");
	txt.innerHTML="<ul>"+
						"<li>Moyeux de type SHIMANO NEXUS 5 ou 7 vitesses indexées</li>"+
						"<li>Mis en place systématiquement sur nos B.A.E, en remplacement des dérailleurs et plateaux / vitesses</li>"+
						"<li>Augmente le confort et la fiabilité</li>"+
						"<li>Diminue le besoin d'entretien par l'utilisateur</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moyeuPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function moteurPlus(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
  "Le moteur central <br><br>"+
  "Est le standard sur les VAE neufs : il offre un couple important et une bonne sensation d'accompagnement du pédalage. Mais il nécessite un cadre spécifique, dont le style est très sportif (VTT) <br><br>"+
  "De notre point de vue, c'est le compagnon idéal pour des randonnées de 80 km mais il est surdimensionné pour un usage urbain <br><br>"+
  "Le moteur à l'avant nous semble une solution préférable en ville. Il"+ 
  "<ul>"+
    "<li>Est plus légér (~1 kg de moins)</li>"+
    "<li> Est silencieux car il ne contient pas d'engrenage</li>"+
    "<li>Suffit amplement pour un trajet de 10 km en zone urbaine</li>"+
  "</ul>"+
  
"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moteurMoins()" role="button">Réduire</a>'+ 
					"</div>";
}
function moteurPlus2(){
	var txt = document.getElementById("textMoteur2");
	txt.innerHTML="<div>"+
  "Le moteur central <br><br>"+
  "Est le standard sur les VAE neufs : il offre un couple important et une bonne sensation d'accompagnement du pédalage. Mais il nécessite un cadre spécifique, dont le style est très sportif (VTT) <br><br>"+
  "De notre point de vue, c'est le compagnon idéal pour des randonnées de 80 km mais il est surdimensionné pour un usage urbain <br><br>"+
  "Le moteur à l'avant nous semble une solution préférable en ville. Il"+ 
  "<ul>"+
    "<li>Est plus légér (~1 kg de moins)</li>"+
    "<li> Est silencieux car il ne contient pas d'engrenage</li>"+
    "<li>Suffit amplement pour un trajet de 10 km en zone urbaine</li>"+
  "</ul>"+
  
"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moteurMoins2()" role="button">Réduire</a>'+ 
					"</div>";
}

function moteurMoins(){
	var txt = document.getElementById("textMoteur");
	txt.innerHTML="<div>"+
				 		"Moteur dans la roue avant PROMOVEC à entraînement direct (non réducté)"+
				 	"</div>"+					
					"<ul>"+
						"<li>2,0 kg</li>"+
						"<li>250 W de puissance</li>"+
						"<li>40 N.m de couple</li>"+						
					"</ul>"+ 
					"<div>"+
						"Idéal pour un utilisateur de moins de 100 kg."+
					"</div>"+

					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moteurPlus()" role="button">En savoir plus</a>'+ 
					"</div>";

}
function moteurMoins2(){
	var txt = document.getElementById("textMoteur2");
	txt.innerHTML="<div>"+
				 		"Moteur dans la roue avant PROMOVEC à entraînement direct (non réducté)"+
				 	"</div>"+					
					"<ul>"+
						"<li>2,0 kg</li>"+
						"<li>250 W de puissance</li>"+
						"<li>40 N.m de couple</li>"+						
					"</ul>"+ 
					"<div>"+
						"Idéal pour un utilisateur de moins de 100 kg."+
					"</div>"+

					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="moteurPlus2()" role="button">En savoir plus</a>'+ 
					"</div>";

}

function freinagePlus(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML="<div>"+
				  "Le système de freinage est composé de 3 éléments :"+
				  "<ul>"+
				    "<li>Le système de frottement : disque, patins, tambour</li>"+
				    "<li>Les leviers de commande sur le guidon</li>"+
				    "<li>La transmission de commande : par cäâbble ou par pression hydraulique</li>"+
				  "</ul>"+
				  "Notre choix est le suivant : <br> <br>"+
				  "Frottement : nosu conservons le système à étrier qui reste très efficace s'il est bien entretenu (nous changeons a minima câbles, gaines et patins) en particulier avec des jantes aluminium qui frotte plus que l'acier"+
				  
				"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="freinageMoins()" role="button">Réduire</a> '+
					"</div>";
}

function freinageMoins(){
	var txt = document.getElementById("textFreinage");
	txt.innerHTML = "Freins coupe circuit qui coupent le moteur dès qu'ils sont actionnés pour le freinage <br><br>"+
			 	"Etriers d'origine conservés pour le style <br><br>"+
			 	"Câbles, gaines et patins remplacés par des neufs"+			
					
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="freinagePlus()" role="button">En savoir plus</a>'+
					"</div>";
}

function batteriePlus(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "<ul>"+
						"<li>Les cellules qui composent les batteries sont toutes fabriquées en Asie mais leur assemblage peut-être réalisé en Europe.</li>"+
						"<li>Pour nos VAE urbains, nous privilégions le poids et la bonne intégration au style de vélo</li>"+
						"<li>Nous avons opté pour une batterie"+
						  "<ul>"+
						    '<li>de forme "bidon'+ "d'eau" + "</li>"+
						    "<li>aux dimensions réduites (H = 280 mm et D = 80 mm)</li>"+
						     "<li> au poids de mobilité inférieur aux batteries de grande capacité qui équipent la plupart des VAE neufs (1,4 kg) => le vélo reste maniable.</li>"+
						  "</ul>"+
					  	"</li>"+
												
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="batterieMoins()" role="button">Réduire</a>'+ 
					"</div>";
}
function batteriePlus2(){
	var txt = document.getElementById("textBatterie2");
	txt.innerHTML = "<ul>"+
						"<li>Les cellules qui composent les batteries sont toutes fabriquées en Asie mais leur assemblage peut-être réalisé en Europe.</li>"+
						"<li>Pour nos VAE urbains, nous privilégions le poids et la bonne intégration au style de vélo</li>"+
						"<li>Nous avons opté pour une batterie"+
						  "<ul>"+
						    '<li>de forme "bidon'+ "d'eau" + "</li>"+
						    "<li>aux dimensions réduites (H = 280 mm et D = 80 mm)</li>"+
						     "<li> au poids de mobilité inférieur aux batteries de grande capacité qui équipent la plupart des VAE neufs (1,4 kg) => le vélo reste maniable.</li>"+
						  "</ul>"+
					  	"</li>"+
												
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="batterieMoins2()" role="button">Réduire</a>'+ 
					"</div>";
}
function batterieMoins(){
	var txt = document.getElementById("textBatterie");
	txt.innerHTML = "<ul>"+
						"<li>Format bidon d'eau <br> (H = 280 mm et diamètre = 80 mm)</li>"+
						"<li>1,4 kg</li>"+
						"<li>250 Wh</li>"+
						"<li>25 à 40 km d'autonomie selon les conditions d'utilisation (charge en kg, niveau d'assistance choisi, dénivelé...)</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="batteriePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}
function batterieMoins2(){
	var txt = document.getElementById("textBatterie2");
	txt.innerHTML = "<ul>"+
						"<li>Format bidon d'eau <br> (H = 280 mm et diamètre = 80 mm)</li>"+
						"<li>1,4 kg</li>"+
						"<li>250 Wh</li>"+
						"<li>25 à 40 km d'autonomie selon les conditions d'utilisation (charge en kg, niveau d'assistance choisi, dénivelé...)</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="batteriePlus2()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function cadrePlus(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = "<ul>"+
						"<li>Le cadre et la fourche sont le coeur du vélo"+
						 "<ul>"+
						    "<li>Ils définissent l'usage possible (route, chemin, ville) et le style.</li>"+
						    "<li>Ils se caractérisent par leur géométrie et leur matériau</li>"+
						  "</ul></li>"+
												"<li>Nous sommes fans des vélos de ville fabriqués en France dans les années 60 à 80 qui offrent un grand confort et sont très robustes.</li>"+
												"<li>L'acier utilisé pour le cadre et la fourche"+
						  "<ul>"+
						    "<li>est plus élastique que l'aluminium, il donne un caractère "+'vivant'+" à la bicyclette,</li>"+
						    "<li>Marque moins à l'impact et permet des soudures très fines (soudo-brasure, raccords)</li>"+
						    "<li>A une durée de vie remarquable avec une protection anti-rouille.</li>"+
						  "</ul></li>"+
						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="cadreMoins()" role="button">Réduire</a>'+
					"</div>";
}

function cadreMoins(){
	var txt = document.getElementById("textCadre");
	txt.innerHTML = "<ul>"+
						"<li>Fabrication française (1960 à 1980)</li>"+
						"<li>Cadre et fourche en acier offrant confort et robustesse</li>"+
						"<li>Position droite confortable et style vintage</li>"+
						"<li>Vérification des soudures, des points de corrosion</li>"+
						"<li>4 types de cadres : Homme / Femme / Mixte / Pliant</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="cadrePlus()" role="button">En savoir plus</a> '+
					"</div>";
}

function selleriePlus(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "<div>"+
					  "Le choix de la sellerie est un équilibre entre confort, style et coût. <br><br>"+
					  "La sellerie d'origine (selle vinyle rembourrée, poignées en plastique) offrent un confort immédiat et conserve au vélo son caractère d'origine. <br><br>"+
					  "Une sellerie cuir, plus coûteuse"+ 
					  "<ul>"+
					    "<li>est plus dure au départ et doit être"+' "faite à la morphologie du cycliste"'+ "(il faut accepter de souffrir un peu au début pour l'assouplir...) </li>"+
					    "<li>renforce le caractère vintage et permet une harmonie avec les différents éléments de fixation divers (selle, sacoche de selle, ruban de poignées, sangle batterie...)</li>"+
					  "</ul>"+
					"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="sellerieMoins()" role="button">Réduire</a>'+ 
					"</div>";					
}

function selleriePlus2(){
	var txt = document.getElementById("textSellerie2");
	txt.innerHTML = "<div>"+
					  "Le choix de la sellerie est un équilibre entre confort, style et coût. <br><br>"+
					  "La sellerie d'origine (selle vinyle rembourrée, poignées en plastique) offrent un confort immédiat et conserve au vélo son caractère d'origine. <br><br>"+
					  "Une sellerie cuir, plus coûteuse"+ 
					  "<ul>"+
					    "<li>est plus dure au départ et doit être"+' "faite à la morphologie du cycliste"'+ "(il faut accepter de souffrir un peu au début pour l'assouplir...) </li>"+
					    "<li>renforce le caractère vintage et permet une harmonie avec les différents éléments de fixation divers (selle, sacoche de selle, ruban de poignées, sangle batterie...)</li>"+
					  "</ul>"+
					"</div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="sellerieMoins2()" role="button">Réduire</a>'+ 
					"</div>";					
}
function sellerieMoins(){
	var txt = document.getElementById("textSellerie");
	txt.innerHTML = "Au choix"+			 						
						"<ul>"+
							"<li>ORIGINALE : confortable et économique</li>"+
							"<li>CUIR : pour renforcer le caractère vintage du célo en y assortissant</li>"+
							"<ul>"+
								"<li>Sacoche de sekke</li>"+
								"<li>Ruban de poignées</li>"+
								"<li>Sangle batterie</li>"+
							"</ul>"+					
						"</ul>"+
						'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
					  		'<a class="btn btn-primary" onclick="selleriePlus()" role="button">En savoir plus</a>'+
						"</div>";

}
function sellerieMoins2(){
	var txt = document.getElementById("textSellerie2");
	txt.innerHTML = "Au choix"+			 						
						"<ul>"+
							"<li>ORIGINALE : confortable et économique</li>"+
							"<li>CUIR : pour renforcer le caractère vintage du célo en y assortissant</li>"+
							"<ul>"+
								"<li>Sacoche de sekke</li>"+
								"<li>Ruban de poignées</li>"+
								"<li>Sangle batterie</li>"+
							"</ul>"+					
						"</ul>"+
						'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
					  		'<a class="btn btn-primary" onclick="selleriePlus2()" role="button">En savoir plus</a>'+
						"</div>";

}

function pedalierPlus(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML = "<ul>"+
						"<li>Le pédalier performance améliore la transmission de votre effort sur les pédales à la roue de 10% en permettant un décalage des deux manivelles (pas de point mort bas/haut)</li>"+
						"<li>Le pédalier « performance »"+
				            "<ul>"+
				              "<li>Est une innovation française</li>"+
				              "<li>Est fabriqué en France</li>"+
				              "<li>Rejoint notre vision d'une Assistance électrique modérée associée à une mécanique offrant un confort de pédalage optimal</li>"+
				            "</ul>"+
		            	"</li>"+						
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierMoins()" role="button">Réduire</a>'+ 
					"</div>";
}

function pedalierMoins(){
	var txt = document.getElementById("textPedalier");
	txt.innerHTML = "<ul>"+
						"<li>Pédalier d'origine ou performance (option)</li>"+
						"<li>Un seul plateau, pas de dérailleur, pas de torsion de la chaîne => fiabilité</li>"+
						"<li>Associé au système de moyeu à vitesses intégrées => confort et fiabilité</li>"+
						"<li>Fabrication française (quel que soit voitre choix)</li>"+
						"<li>Le pédalier performance</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="pedalierPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}


function rouePlus(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = "<h5>ESTHETIQUE</h5>"+
					"<div>Sur le plan esthétique, les deux roues sont identiques. <br>"+
					"Vous pouvez choisir entre Chrome et noir satiné. <br><br>"+
					"</div>"+
					"<h5>FABRIQUEES EN FRANCE</h5>"+
					"<div>Les jantes et les rayons sont fabriqués en France (MACH1). <br>"+
					"Le rayonnage est effectué par un artisan en France.<br><br>"+
					"</div>"+
					"<h5>MEILLEUR FREINAGE</h5>"+
					"<div>Les jantes sont double parois pour plus de robustesse.<br><br></div>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="roueMoins()" role="button">Réduire</a> '+
					"</div>";
}

function roueMoins(){
	var txt = document.getElementById("textRoues");
	txt.innerHTML = "Au choix"+			 						
					"<ul>"+
						"<li>Roues de 28 pouces double parois en aluminium</li>"+
						"<li>Robustesse et freinage sur jante optimisé</li>"+
						"<li>Fabriquées en France</li>"+
						"<li>Nombreuses configurations esthétiques : jantes, rayons, moyeu (moteur et moyeu à vitesses) chromés ou noir</li>"+					
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+					  	
				  		'<a class="btn btn-primary" onclick="rouePlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}

function equipementPlus(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "Les équipements suivants complètent le vélo"+
					"<ul>"+
						"<li>Un afficheur pour choisir votre niveau d’assistance, que nous positionnons près du pouce gauche</li>"+
						"<li>Un capteur de pédalage intégré au niveau de l’axe de pédalier</li>"+
						"<li>Un contrôleur masqué dans une sacoche de selle ou de tube horizontal (en cuir si vous avez opté pour la sellerie cuir) qui détermine la quantité d’énergie à transmettre de la batterie au moteur</li>"+
						"<li>Vous pouvez également accessoirisé votre vélo avec des sacoches, de transport, des rétroviseurs, etc…</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick = "equipementMoins()" role="button">Réduire</a> '+
					"</div>";
}

function equipementMoins(){
	var txt = document.getElementById("textEquipement");
	txt.innerHTML = "<ul>"+
						"<li>Afficheur / sélecteur du niveau d'assistance</li>"+
						"<li>Capteur et contrôleur pour déterminer la quantité d'électricité envoyée au moteur</li>"+
						"<li>Nombreux accessoires pour un style plus vintage encore : colliers de gaine, sangles en cuir, phare bombé...</li>"+
						"<li>Fabrication française (quel que soit voitre choix)</li>"+
						"<li>Le pédalier performance</li>"+
					"</ul>"+
					'<div class="d-grid gap-2 d-md-flex justify-content-md-end">'+						  	
				  		'<a class="btn btn-primary" onclick="equipementPlus()" role="button">En savoir plus</a>'+ 
					"</div>";
}