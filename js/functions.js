function login(){
    var login = $('#username').textbox('getValue');;
    var password = $('#password').textbox('getValue');

    if(login == "" && password == ""){
        setTimeout(function(){ $.mobile.go('#estimate'); }, 500);        
    }else{
        $.messager.alert('Login','Usuário/Senha Inválido!');
    }
}

function registerEstimate(){
    $.mobile.go('#register_estimate');
}

function editEstimate(){
    row = $('#dg_Estimate').datagrid('getSelected');

    if(row){
        $.messager.alert('Ops!','Ok!');
    }else{
        $.messager.alert('Ops!','Selecione uma Pre-Venda para Editar!');
    }    
}

function removeEstimate(){
    row = $('#dg_Estimate').datagrid('getSelected');

    if(row){
        $.messager.alert('Ops!','Ok!');
    }else{
        $.messager.alert('Ops!','Selecione uma Pre-Venda para Remover!');
    }    
}