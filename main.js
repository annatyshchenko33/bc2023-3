const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(`Помилка читання файлу data.json: ${err}`);
        return;
    }

    try {
        const currencyData = JSON.parse(data);
        const outputData = [];

        // Перебираємо об'єкти в масиві і виводимо кожну дату та курс
        currencyData.forEach((currency) => {
            const date = currency.exchangedate;
            const rate = currency.rate;
            outputData.push(`${date}:${rate}`);
        });

        const outputText = outputData.join('\n');

        fs.writeFile('output.txt', outputText, 'utf8', (err) => {
            if (err) {
                console.error(`Помилка запису у файл output.txt: ${err}`);
            } else {
                console.log('Дані були успішно записані у файл output.txt');
            }
        });
    } catch (err) {
        console.error(`Помилка розбору JSON-даних: ${err}`);
    }
});
