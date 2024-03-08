// formGenerator.js  
function createForm() {  
    // 获取当前页面的URL
    var currentURL = window.location.href;
    console.log("Current URL: " + currentURL, window.location);

    var form = document.createElement("form");  
    form.setAttribute("action", "/submit-form"); // 设置表单提交的目标URL  
    form.setAttribute("method", "post"); // 设置表单提交方法  
  
    var formRowContainer = document.createElement("div"); 
    formRowContainer.setAttribute("class", "form-group");

    // 创建输入字段  
    var nameInput = document.createElement("input");  
    nameInput.setAttribute("type", "text");  
    nameInput.setAttribute("name", "name");  
    nameInput.setAttribute("autoComplete", "off");  
    nameInput.setAttribute("placeholder", "Your Name");  
  
    formRowContainer.appendChild(nameInput)

    // 将输入字段和提交按钮添加到表单中  
    form.appendChild(formRowContainer);  

    var emailInput = document.createElement("input");  
    emailInput.setAttribute("type", "email");  
    emailInput.setAttribute("name", "email");  
    emailInput.setAttribute("autoComplete", "off");  
    emailInput.setAttribute("placeholder", "Your Email");  
    
    formRowContainer = document.createElement("div");  
    formRowContainer.setAttribute("class", "form-group");
    formRowContainer.appendChild(emailInput)
    form.appendChild(formRowContainer);  

    // 创建提交按钮  
    var submitButton = document.createElement("input");  
    submitButton.setAttribute("type", "submit");  
    submitButton.setAttribute("value", "Submit");  
  
    form.appendChild(submitButton);  
  
    // 找到要添加表单的容器元素（例如，具有特定ID的元素）  
    var container = document.getElementById("form-container");  
    container.setAttribute("class", "container");
    if (container) {  
        // 将表单添加到容器中  
        container.appendChild(form);  
    } else {  
        console.error("Container element not found!");  
    }  
}  
  
// 在页面加载完成后调用createForm函数  
window.onload = createForm;

