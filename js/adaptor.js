const LevelAdaptor = (function () {
    // 3rd ed level use all none white space characters
    // so trim will remove any unwanted src formatting
    function convertPlan(planStr) {
        return planStr.trim().replace(/\+/g, "!").replace(/\./g, " ").split('\n');
    }

    return {
        convertPlan: convertPlan
    };

})();

module.exports = LevelAdaptor;
