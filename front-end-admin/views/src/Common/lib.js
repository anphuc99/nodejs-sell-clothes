function asset(path){
    let domain = document.getElementById("domain").value 
    return domain + path
}

export default {
    asset: asset
}