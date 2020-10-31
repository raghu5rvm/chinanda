
function set_section_dim(){
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;
        // window.alert("check alert js");

    var title_section = document.getElementById("main-title"),
        couple_info_section = document.getElementById("couple-info"),
        section_sep1 = document.getElementById("section-sep1"),
        wedding_info_section = document.getElementById("wedding-info"),
        section_sep2 = document.getElementById("section-sep2"),
        registry_info_section = document.getElementById("registry-info"),
        footer_section = document.getElementById("footer-section");

    var max_side= WIDTH,
        min_sie = HEIGHT;
    var section_height = HEIGHT,
        section_with = WIDTH*1.1;
        console.log("test");

        // alert("desktop");

        title_section.style.setProperty("height",(HEIGHT*1.1)+"px");
        title_section.style.setProperty("width",100+"%");
    
        couple_info_section.style.setProperty("height",(HEIGHT*2.2)+"px");
        couple_info_section.style.setProperty("width",100+"%");
    
        section_sep1.style.setProperty("height",(HEIGHT*0.4)+"px");
        section_sep1.style.setProperty("width",100+"%");
        console.log(section_sep1);
    
        wedding_info_section.style.setProperty("height",(HEIGHT*3)+"px");
        wedding_info_section.style.setProperty("width",100+"%");
     
        section_sep2.style.setProperty("height",(HEIGHT*0.4)+"px");
        section_sep2.style.setProperty("width",100+"%");
     
        registry_info_section.style.setProperty("height",(HEIGHT*2.2)+"px");
        registry_info_section.style.setProperty("width",100+"%");

        footer_section.style.setProperty("height",(HEIGHT*0.1)+"px");
        footer_section.style.setProperty("width",100+"%");

}

function clear_form(){
    var name_ip = document.getElementById("ip_name"),
        number_ip = document.getElementById("ip_number"),
        email_ip = document.getElementById("ip_email");
    var valid_name = false,
        valid_nuber = false,
        valid_email = false;
    var name_regex = /^[a-zA-Z ]{2,30}$/,
        number_regex = /^[0-9]{10,11}$/,
        email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name_regex.test(name_ip.value)){
        valid_name = true;
        }
    if (number_regex.test(number_ip.value)){
        valid_nuber = true;
    }
    if (email_regex.test(email_ip.value)){
        valid_email = true;
    }

    if (valid_name & valid_nuber && valid_email){
        alert("see you soooon, "+name_ip.value);
    }
    else {
        alert("looks like some details are wrong. Don't forget to come");
    }
    name_ip.value = "";
    number_ip.value = "";
    email_ip.value = "";
    console.log("cleared form");
}

window.onload = function() {
    
    set_section_dim();

}
