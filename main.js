﻿$(document).ready(function(){
	$(document).on("click", ".snomedLIDefault", function(){
		var id = $(this).attr("data-default");
		snomedCT.forEach(function(element) {
			if(id==element.id){
				$("#refCIM10").empty().append(element.mapTarget);
				$("#refName").empty().append(element.icdName);
				$("#ContainResult").slideDown("slow");
				$("#listSnomedName").slideUp("slow", function(){
					$("#listSnomedName").empty();
					$("#listSnomedName").show();
				});

			}
		});
	})

	$(document).on("click", ".snomedLI", function(){
		var id = $(this).attr("data-id");
		var dataName = $(this).attr("data-name");
		$("#listSnomedName").slideUp("slow", function(){
			$("#listSnomedName").empty();
			$("#listSnomedName").show();
			searchMapTarger(dataName);
		});
	});

	var tagSnomed = [
		"Streptococcus pyogenes infection (disorder)",
		"Sepsis caused by Streptococcus (disorder)",
		"Sepsis caused by Streptococcus pyogenes (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by Streptococcus (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Gram-positive coccus (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Group A streptococcus (disorder)",
		"Severe sepsis with acute organ dysfunction due to Group A streptococcus (disorder)",
		"Sepsis caused by Streptococcus agalactiae (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Group B streptococcus (disorder)",
		"Severe sepsis with acute organ dysfunction due to Group B streptococcus (disorder)",
		"Sepsis caused by Streptococcus pneumoniae (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by Pneumococcus (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Pneumococcus (disorder)",
		"Infection caused by Streptococcus suis (disorder)",
		"Sepsis caused by Streptococcus suis (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Streptococcus (disorder)",
		"Sepsis caused by anaerobic bacteria (disorder)",
		"Sepsis caused by anaerobic streptococcus (disorder)",
		"Severe sepsis with acute organ dysfunction due to coagulase negative Staphylococcus (disorder)",
		"Bacteremia (finding)",
		"Bacteremia caused by Staphylococcus aureus (finding)",
		"Sepsis caused by Staphylococcus (disorder)",
		"Sepsis caused by Staphylococcus aureus (disorder)",
		"Bacteremia caused by Gram-positive bacteria (finding)",
		"Septic shock co-occurrent with acute organ dysfunction caused by methicillin susceptible Staphylococcus aureus (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Staphylococcus (disorder)",
		"Severe sepsis with acute organ dysfunction caused by methicillin susceptible Staphylococcus aureus (disorder)",
		"Methicillin resistant Staphylococcus aureus infection (disorder)",
		"Sepsis caused by methicillin resistant Staphylococcus aureus (disorder)",
		"Severe sepsis with acute organ dysfunction caused by methicillin resistant Staphylococcus aureus (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by methicillin resistant Staphylococcus aureus (disorder)",
		"Sepsis caused by coagulase negative Staphylococcus (disorder)",
		"Infection caused by Staphylococcus Coagulase negative (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to coagulase-negative Staphylococcus (disorder)",
		"Septic myocarditis - staphylococcal (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Staphylococcus (disorder)",
		"Sepsis caused by Staphylococcus without acute organ dysfunction (disorder)",
		"Sepsis caused by Haemophilus influenzae (disorder)",
		"Sepsis caused by Haemophilus influenzae type B (disorder)",
		"Haemophilus influenzae type b infection (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by Haemophilus influenzae (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Haemophilus influenzae (disorder)",
		"Infection caused by Clostridium perfringens (disorder)",
		"Sepsis caused by Peptostreptococcus (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by anaerobic bacteria (disorder)",
		"Severe sepsis with acute organ dysfunction caused by anaerobic bacteria (disorder)",
		"Peptostreptococcus infection (disorder)",
		"Gram-positive septic shock (disorder)",
		"Sepsis caused by Gram negative bacteria (disorder)",
		"Bacteremia caused by Gram-negative bacteria (finding)",
		"Severe sepsis with acute organ dysfunction caused by Gram-negative bacteria (disorder)",
		"Colitoxemia (disorder)",
		"Colitoxicosis (disorder)",
		"Coliform septicemia (disorder)",
		"Enterotoxemia (disorder)",
		"Sepsis caused by Escherichia coli (disorder)",
		"Infection caused by Pseudomonas aeruginosa (disorder)",
		"Pseudomonas septicemia with skin involvement (disorder)",
		"Sepsis caused by Pseudomonas (disorder)",
		"Sepsis caused by Pseudomonas aeruginosa (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by Pseudomonas (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Pseudomonas (disorder)",
		"Bacterial infection caused by Serratia (disorder)",
		"Sepsis caused by Serratia (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction caused by Serratia (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Serratia (disorder)",
		"Infection caused by Bacteroides (disorder)",
		"Septicemia caused by Chromobacterium (disorder)",
		"Septicemia caused by Bacteroides (disorder)",
		"Hemorrhagic septicemia barbone (disorder)",
		"Bacterial hemorrhagic septicemia (disorder)",
		"Septicemic pasteurellosis (disorder)",
		"Proteus septicemia (disorder)",
		"Sepsis caused by Acinetobacter (disorder)",
		"Sepsis caused by Enterobacter (disorder)",
		"Infection caused by Enterobacter (disorder)",
		"Vancomycin resistant enterococcal septicemia (disorder)",
		"Septicemia caused by enterococcus (disorder)",
		"Infection caused by enterococcus (disorder)",
		"Infection caused by vancomycin resistant enterococcus (disorder)",
		"Infection caused by Streptococcus group D (disorder)",
		"Sepsis caused by Streptococcus group D (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Enterococcus (disorder)",
		"Severe sepsis with acute organ dysfunction due to Enterococcus (disorder)",
		"Gas gangrene septicemia (disorder)",
		"Gram positive sepsis (disorder)",
		"Septic shock co-occurrent with acute organ dysfunction due to Chromobacterium (disorder)",
		"Severe sepsis with acute organ dysfunction caused by Gram-positive bacteria (disorder)",
		"Bacterial sepsis (disorder)",
		"Infection following infusion, injection, transfusion AND/OR vaccination (disorder)",
		"Tracheostomy sepsis (disorder)",
		"Pyemia (disorder)",
		"Sepsis following infusion, injection, transfusion AND/OR vaccination (disorder)",
		"Clinical infection (disorder)",
		"Septic bronchitis (disorder)",
		"Tracheostomy complication (disorder)",
		"Sepsis (disorder)",
		"Indirect acute lung injury (disorder)",
		"Sepsis-associated lung injury (disorder)",
		"Sepsis-related gastritis (disorder)",
		"Septic splenitis (disorder)",
		"Sepsis-related gastrointestinal ulceration (disorder)",
		"Sepsis-associated gastrointestinal hemorrhage (disorder)",
		"Sepsis-associated myocardial dysfunction (disorder)",
		"Sepsis-associated right ventricular failure (disorder)",
		"Infection of intravenous catheter (disorder)",
		"Infection of blood and lymphatic system (disorder)",
		"Acute lung injury (disorder)",
		"Right ventricular failure (disorder)",
		"Transient respiratory distress with sepsis (disorder)",
		"Sepsis-related gastrointestinal lesions (disorder)",
		"Infection of vascular catheter (disorder)",
		"Sepsis due to infected central venous catheter (disorder)",
		"Infection of bloodstream (disorder)",
		"Neutropenic sepsis (disorder)",
		"Clinical sepsis (disorder)",
		"Postoperative sepsis (disorder)",
		"Sepsis in asplenic subject (disorder)",
		"Post-splenectomy sepsis (disorder)",
		"Sepsis associated with acquired immunodeficiency syndrome (disorder)",
		"Sepsis with cutaneous manifestations (disorder)",
		"Sepsis due to oral infection (disorder)",
		"Sepsis due to urinary tract infection (disorder)",
		"Chronic kidney disease due to systemic infection (disorder)",
		"Acute kidney injury due to sepsis (disorder)",
		"Systemic inflammatory response syndrome without organ dysfunction (disorder)",
		"Septicemia associated with vascular access catheter (disorder)",
		"Sepsis associated with internal vascular access (disorder)",
		"Sepsis without acute organ dysfunction (disorder)"
	];

	$( "#snomedLibelle" ).autocomplete({
      source: tagSnomed
    });


	$("#cim10BTNsnomed").click(function(){
		var snomed = $("#snomedLibelle").val();
		isValideSnomed(snomed);
		searchMapTarger(snomed);
	})

	$("#cim10BTN").click(function(){
		var bacterie = $("#bacterieLibelle").val();
		isValideForm(bacterie);
		var CIM10 = rechercheCIM10(bacterie);

		if(CIM10 != -1){
			$("#refCIM10").empty().append(CIM10);
			$("#refName").empty().append(bacterie);
			$("#errorMsg").slideUp("slow", function(){
				$("#ContainResult").slideDown("slow");	
			})
		}
		else{
			$("#ContainResult").slideUp("slow", function(){
				$("#errorMsg").slideDown("slow");
				setTimeout(function(){
					$("#errorMsg").slideUp("slow"); 
				}, 2000);
			});
		}
	});

	$(".aide").hover(function(){
		$(this).after("<span id='aide'>"+$(this).attr("data-text")+"</span>");
		$("#aide").fadeIn("slow");
	}, function(){
		$("#aide").remove();
	})
})


function isValideForm(bacterie){
	return true;
}

function isValideSnomed(snomed){
	return true;
}

function searchMapTarger(snomed){
	var snomedID = -1;
	result = [];
	snomedCT.forEach(function(element){
		if(element.sctName == snomed){
			result.push(element);
		}
	})

	if(result.length == 1){
		$("#refCIM10").empty().append(result[0].mapTarget);
		$("#refName").empty().append(snomed);
		$("#ContainResult").slideDown("slow");	
	}
	else{
		$("#listSnomedName").append("<h3>Pas assez explicite pour code CIM10..</h3>");
		$("#listSnomedName").append("<h4>Voici le mapping lié à votre recherche : (Veuillez en sélectionner un)");
		result.forEach(function(elem){
			if(elem.mapRule.indexOf("IFA") >=0){
				var snomTMP = elem.mapRule.substring(elem.mapRule.indexOf("|")+1, elem.mapRule.indexOf("|", elem.mapRule.indexOf("|")+1)).trim();
				$("#listSnomedName").append("<li class='snomedLI' data-id='"+elem.id+"' data-name='"+snomTMP+"'>"+ snomTMP +"</li>");
			}
			else{
				$("#listSnomedName").append("<li class='snomedLIDefault' data-default='"+elem.id+"'> Autre - "+ elem.icdName +"</li>");
			}
		});
	}
}

function rechercheCIM10(bacterie){
	var CIM10 = -1;
	streptocoque = Sepsis.streptocoque;
	streptocoque.forEach(function(element) {
		if(element.Nom.indexOf(bacterie) >= 0){
			CIM10 = element.CIM10;
		}
		if(element.synonyme.indexOf(bacterie) >= 0){
			CIM10 = element.CIM10;
		}
		if(element.abreviation.indexOf(bacterie) >=0){
			CIM10 = element.CIM10;
		}
	});

	autreSepsis = Sepsis.autre;
	autreSepsis.forEach(function(element) {
		if(element.Nom.indexOf(bacterie) >= 0){
			CIM10 = element.CIM10;
		}
		if(element.synonyme.indexOf(bacterie) >= 0){
			CIM10 = element.CIM10;
		}
		if(element.abreviation.indexOf(bacterie) >=0){
			CIM10 = element.CIM10;
		}
	});

	return CIM10;
}