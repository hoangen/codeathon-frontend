import StringUtils from './stringUtils'
import ObjectUtils from './objectUtils'
import './arrayUtils'
export default class DataConvertUtils {

    /**
     * Helper function to compare two OptionList's Option object by it's value
     * @param {*two OptionList's Option object to be compared} lovs 
     */
    static sortOptionByValue(option1, option2) {
        return option1.value > option2.value ? 1 : (option1.value < option2.value ? -1 : 0)
    }

    /**
     * Helper function to convert a list of LOV's provinces into list of Option objects to be used by the OptionList component
     * @param lovs
     * @returns List of towns/cities
     */
    static convertLOVToListOfCity(lovs) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.province))
            return null

        return lovs.province
            .filter(province => StringUtils.isNotEmpty(province.town))
            .map(province => province.town
                .map(function (town) {
                    return {
                        key: town.code,
                        value: StringUtils.capitalizeFirstCharacterOfEachWord(town.name)
                    }
                }))
            .reduce((towns1, towns2) => towns1.concat(towns2), [])
    }



    /**
     * Helper function to convert a list of LOV's Loan of Purposes into list of Option objects to be used by the OptionList component
     * @param {*list of LOV return from getLOV API} lovs 
     */
    static convertLOVToListOfLoanPurposeOptions(lovs) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.loanPurpose))
            return []


        return lovs.loanPurpose
            .map(function (loanPurpose) {
                return {
                    key: loanPurpose.name,
                    value: loanPurpose.name
                }
            })
    }

    /**
     * Helper function to convert a list of LOV's Loan of Purpose into list of Occupation object to be used by OptionList component
     * @param {*list of LOV return from getLOV API} lovs 
     */
    static convertLOVToListOfOccupations(lovs) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.occupations))
            return []

        return lovs.occupations
            .map(function (occupationItem) {
                return {
                    key: occupationItem.code,
                    value: occupationItem.name
                }
            })
    }

    /**
     * Helper function to convert a list of LOV's Loan of Purpose into list of Occupation object to be used by OptionList component
     * @param {*list of LOV return from getLOV API} lovs 
     */
    static convertLOVToListOfLineOfBusinessGroup(lovs) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.lineOfBusinessGroups))
            return []

        var lobGroups = lovs.lineOfBusinessGroups
            .map(function (olbGroupItem) {
                return {
                    key: olbGroupItem.code,
                    value: olbGroupItem.name
                }
            })

        return lobGroups
    }

    static getOptionListDataFromLobGroup(lovs, selectedLineOfBusinessGroup) {
        if (StringUtils.isEmpty(selectedLineOfBusinessGroup)) {
            return []
        }

        var lobGroup = lovs.lineOfBusinessGroups.filter(element => {
                return element.name === selectedLineOfBusinessGroup
        })

        var optionListData = []
        if (lobGroup.length > 0 && lobGroup[0].linesOfBusiness) {
            optionListData = lobGroup[0].linesOfBusiness.map(function (lob) {
                return {
                    key: lob.code,
                    value: lob.name
                }
            })

        }

        return optionListData
    }

    static convertOccupationSelectedToListOfJobTitles(occupationSelected) {
        if (ObjectUtils.isEmpty(occupationSelected) || ObjectUtils.isEmpty(occupationSelected.jobTitles))
            return []

        var jobTitles = occupationSelected.jobTitles
            .map(function (jobTitle) {
                return {
                    key: jobTitle.code,
                    value: jobTitle.name
                }
            })

        return jobTitles
    }

    /**
     * Helper function to convert a list of LOV's Occupations into list of Option objects to be used by the OptionList component
     * Each Occupation Option is corresponding to a list of occupations have the same name
     * @param {*list of LOV return from getLOV API} lovs 
     */
    static convertLOVToListOfOccupationGroupOptions(lovs) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.occupations)) {
            return []
        }

        return lovs.occupations
            .groupBy(occupation => occupation.name)
            .map(function (group) {
                return {
                    key: group.key,
                    value: group.key
                }
            })
    }

    /**
     * Helper function to get a list of Job Title Options by list of Occupation Codes to be used by the OptionList component
     * @param {*list of Occupations of the same Name} lovs 
     */
    static getListJobTitleOptionsByListOccupationName(lovs, occupationName) {
        if (ObjectUtils.isEmpty(lovs) || ObjectUtils.isEmpty(lovs.occupations)) {
            return [];
        }

        return lovs.occupations
            .filter(occupation => (occupation.name === occupationName))
            .flatMap(occupation => occupation.jobTitles
                .map(function (jobTitle) {
                    return {
                        key: jobTitle.code,
                        value: jobTitle.name
                    }
                }))
    }

}
