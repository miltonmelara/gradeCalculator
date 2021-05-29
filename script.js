const classFactory = (portfolios, exams, finalExGrade) => {
    return {
        portfolios: portfolios,
        exams: exams,
        finalExGrade: finalExGrade,
    }
};
const math = classFactory([100,100,100,100,100,100,100,100, 80], [100,100,100,100], 95);
const calculateGrades = (obj) =>{
    let portAverage = (obj.portfolios.reduce((a, b) => a + b, 0))/ obj.portfolios.length;
    let exAverage = (obj.exams.reduce((a, b) => a + b, 0)) / obj.exams.length;
    let portZone = portAverage * 0.15;
    let exZone = exAverage * 0.4;
    let totalZone = Math.round(portZone + exZone);
    let totalGrade = totalZone + Math.round(obj.finalExGrade * 0.45);
    return `Total grade: ${totalGrade}, total zone: ${totalZone}`
}
console.log(calculateGrades(math))