 // Calculator logic
        let calcDisplay = document.getElementById('calc-display');
        let calcResult = document.getElementById('calc-result');
        let calcValue = '';
        function appendCalc(val) {
            calcValue += val;
            calcDisplay.value = calcValue;
        }
        function clearCalc() {
            calcValue = '';
            calcDisplay.value = '';
            calcResult.textContent = '';
        }
        function calculateCalc() {
            try {
                let res = eval(calcValue);
                calcResult.textContent = 'Result: ' + res;
            } catch {
                calcResult.textContent = 'Error';
            }
        }

        // Unit converter logic
        const unitFactors = {
            m: 1,
            km: 1000,
            cm: 0.01,
            in: 0.0254,
            ft: 0.3048
        };
        function convertUnit() {
            let value = parseFloat(document.getElementById('unit-value').value);
            let from = document.getElementById('unit-from').value;
            let to = document.getElementById('unit-to').value;
            if (isNaN(value)) {
                document.getElementById('unit-result').textContent = 'Enter a valid number.';
                return;
            }
            let valueInMeters = value * unitFactors[from];
            let converted = valueInMeters / unitFactors[to];
            document.getElementById('unit-result').textContent = `${value} ${from} = ${converted} ${to}`;
        }