const kettleConfig = {
    brand: 'Braun',
    model: 'WK 300',
    power: 2200,
    volume: 1.7,
    waterLeval: 1.2,
}

function HeatingWater ({brand, model, power, volume, waterLeval}) {

    this.showKettleInfo = () => {
        console.log('------------------------');        
        console.log(`Электрочайник: ${brand} ${model}, мощность: ${power}Вт, объем ${volume}л`);
        console.log('------------------------'); 
    }

    const getWaterBoilingTime = () => {
        const temperatureInitial = 20;
        const temperatureBoiling = 100;
        const densityOfWater = 1000;
        const specificHeat = 4200;

        const timingBoiling = specificHeat*densityOfWater*waterLeval*0.001*(temperatureBoiling - temperatureInitial)/power
        return timingBoiling
    }

    this.showWaterBoilingTime = () => {
        const timingBoiling = getWaterBoilingTime();
        const minutes = Math.floor(timingBoiling/60);
        const seconds = Math.round((timingBoiling/60 - minutes)*60);

        console.log(`Время закипания воды: ${minutes}мин.${seconds}с. для ${waterLeval}л воды`);
    }

    this.offOn = (time) => {        
        const timingBoiling = (getWaterBoilingTime())/60;
        
        if(time === 0) {
            console.log('Включить чайник');
        } else if(time <= timingBoiling && time > 0) {
            console.log('Выключить чайник');
        } else if (time > timingBoiling) {
            return;
        }      
    }
}

const kettle = new HeatingWater(kettleConfig);
console.log(kettle);


kettle.showKettleInfo();
kettle.showWaterBoilingTime();
kettle.offOn(2)
