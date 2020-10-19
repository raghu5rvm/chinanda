
function set_section_dim(){
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;
        // window.alert("check alert js");

    var title_section = document.getElementById("main-title"),
        couple_info_section = document.getElementById("couple-info"),
        section_sep1 = document.getElementById("section-sep1"),
        wedding_info_section = document.getElementById("wedding-info"),
        section_sep2 = document.getElementById("section-sep2"),
        registry_info_section = document.getElementById("registry-info");

    var max_side= WIDTH,
        min_sie = HEIGHT;
    var section_height = HEIGHT,
        section_with = WIDTH*1.1;
        console.log("test");

        // alert("desktop");

        title_section.style.setProperty("height",(HEIGHT*1.1)+"px");
        title_section.style.setProperty("width",100+"%");
    
        couple_info_section.style.setProperty("height",(HEIGHT*1.5)+"px");
        couple_info_section.style.setProperty("width",100+"%");
    
        section_sep1.style.setProperty("height",(HEIGHT*0.3)+"px");
        section_sep1.style.setProperty("width",100+"%");
        console.log(section_sep1);
    
        wedding_info_section.style.setProperty("height",(HEIGHT*1.5)+"px");
        wedding_info_section.style.setProperty("width",100+"%");
     
        section_sep2.style.setProperty("height",(HEIGHT*0.3)+"px");
        section_sep2.style.setProperty("width",100+"%");
     
        registry_info_section.style.setProperty("height",(HEIGHT*1.2)+"px");
        registry_info_section.style.setProperty("width",100+"%");

        


}


window.onload = function() {
    
    set_section_dim();

}
