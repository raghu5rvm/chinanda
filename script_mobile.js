
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

    var maps_frame = document.getElementById("maps_frame");

    maps_frame.setAttribute("width",parseInt(WIDTH*0.9));

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
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    if (check==false){
        this.setTimeout(function(){
            console.log("found android");
            alert("android detected");
        },2000)
        window.location = "index.html";
        console.log("redirect to mobile site!!!");
    }

    set_section_dim();

}
