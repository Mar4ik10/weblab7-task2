const form = document.querySelector('.feedback-form');

// Оголошення об'єкту formData з початковими порожніми значеннями
let formData = {
    email: "",
    message: ""
};

// Перевірка, чи є дані у локальному сховищі і заповнення форми відповідно
const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
    formData = JSON.parse(savedFormData);
    form.email.value = formData.email;
    form.message.value = formData.message;
}

// Функція для оновлення даних у локальному сховищі
const updateLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Прослуховування події input та оновлення даних у formData і локальному сховищі
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    updateLocalStorage();
});

// Прослуховування події submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевірка наявності значень в обох полях форми
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    // Логування об'єкту formData та очищення локального сховища та об'єкту formData
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };

    // Очистка полів форми
    form.reset();
});
