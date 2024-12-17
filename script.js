let shoppingList = [];
let listVisible = true;

// التحقق من تسجيل الدخول
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("mainSection").style.display = "flex";
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة السر");
    }
}

// إضافة عنصر إلى القائمة
function addItem(item = "") {
    const inputField = document.getElementById("newItem");
    const itemName = item || inputField.value;

    if (itemName) {
        shoppingList.push({ name: itemName, notes: "" });
        renderList();
        inputField.value = ""; // تفريغ الحقل
    } else {
        alert("يرجى إدخال اسم العنصر");
    }
}

// عرض القائمة
function renderList() {
    const listContainer = document.getElementById("shoppingList");
    listContainer.innerHTML = "";

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("item");

        // نص العنصر
        listItem.innerHTML = `
            <span>${item.name}</span>
            <input type="text" placeholder="أضف ملاحظة" value="${item.notes}" 
                   oninput="updateNotes(${index}, this.value)">
            <button class="delete" onclick="deleteItem(${index})">حذف</button>
        `;

        listContainer.appendChild(listItem);
    });
}

// تحديث الملاحظات
function updateNotes(index, value) {
    shoppingList[index].notes = value;
}

// حذف عنصر
function deleteItem(index) {
    shoppingList.splice(index, 1);
    renderList();
}

// فتح قائمة جديدة
function createNewList() {
    if (confirm("هل تريد بدء قائمة جديدة؟ ستفقد جميع البيانات الحالية!")) {
        shoppingList = [];
        renderList();
    }
}

// تصغير/توسيع القائمة
function toggleList() {
    const listContainer = document.getElementById("shoppingList");
    listVisible = !listVisible;
    listContainer.style.display = listVisible ? "block" : "none";
}
