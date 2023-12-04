const ctx = document.getElementById('myChart').getContext('2d');
const power = document.getElementById('power').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Others'],
        datasets: [{
            label: 'Electricity Units ',
            data: [45, 34, 20, 10, 5],
            backgroundColor: [
                'rgba(250, 0, 255, 0.7)',
                'rgba(0, 102, 255, 0.7)',
                'rgba(255, 107, 0, 0.7)',
                'rgba(20, 255, 0, 0.7)',
                'rgba(255, 255, 255, 0.7)',
            ],
            borderColor: [
                'rgba(250, 255, 255, 1)',
            ],
            borderWidth: .5
        }]
    },
    options: {
        resposive: true,
    }
});


const myCharrt = new Chart(power, {
    type: 'bar',
    data: {
        labels:  ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Others'],
        datasets: [{
            label: 'Maximum Power',
            data: [45, 20, 34, 10, 5],
            backgroundColor: [
                'rgba(250, 0, 255, 0.7)',
                'rgba(255, 107, 0, 0.7)',
                'rgba(0, 102, 255, 0.7)',
                'rgba(20, 255, 0, 0.7)',
                'rgba(255, 255, 255, 0.7)',
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        resposive: true,
    }
});