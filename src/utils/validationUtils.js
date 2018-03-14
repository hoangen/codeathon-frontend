import ObjectUtils from "./objectUtils"
import StringUtils from "./stringUtils"
import {Defines as Constants, Defines} from "../common/constants"

const ValidationUtils = {
    customerPersonalInformation: {
        nikValidation: value => {
            if (!value) {
                return 'Masukkan nomor KTP Anda'
            } else if (!/^[0-9]*$/.test(value)) {
                return 'Nomor KTP harus diisi dengan angka'
            } else if (value.length !== 16) {
                return 'Nomor KTP Anda harus 16 angka'
            }
            return undefined
        },
        nameValidation: value => {
            if (!value) {
                return 'Masukkan nama lengkap Anda'
            } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                return 'Nama harus diisi dengan huruf'
            }
            return undefined
        },
        contactNameValidation: value => {
            if (!value) {
                return 'Masukkan nama lengkap kontak darurat'
            } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                return 'Nama harus diisi dengan huruf'
            }
            return undefined
        },
        phoneNumberValidation: value => {
            if (!value) {
                return 'Masukkan nomor ponsel Anda'
            } else if (!/^(0|62)[0-9]*$/.test(value)) {
                return 'Nomor ponsel Anda tidak valid'
            } else if (value.length < 9 || value.length > 16) {
                return 'Nomor ponsel Anda tidak valid'
            }
            return undefined
        },
        emergencyPhoneNumberValidation: (value, allValues) => {
            if (!value) {
                return 'Masukkan nomor ponsel kontak darurat'
            } else if (!/^(0)[0-9]{9,14}$/.test(value)) {
                return 'Nomor ponsel kontak darurat tidak valid'
            } else if (value === allValues.phoneNumber) {
                return 'Nomor ponsel kontak darurat harus berbeda dengan nomor ponsel Anda'
            }
            return undefined
        },
        emergencyContactNameValidation: (value) => {
            if (!value) {
                return 'Masukkan nama lengkap kontak darurat'
            } else if (!/^([a-zA-Z\s])*$/.test(value)) {
                return 'Nama harus diisi dengan huruf'
            }
            return undefined
        },
        contactPhoneValidation: value => {
            if (!value) {
                return 'Masukkan nomor ponsel kontak darurat'
            } else if (!/^(0|62)[0-9]*$/.test(value)) {
                return 'Nomor ponsel kontak darurat tidak valid'
            } else if (value.length < 9 || value.length > 16) {
                return 'Nomor ponsel kontak darurat tidak valid'
            }
            return undefined
        },
        dayOfBirthValidation: value => (value ? undefined : 'Masukkan tanggal lahir Anda'),
        emailValidation: value => {
            if (!value) {
                return 'Masukkan alamat email Anda'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                return 'Format alamat email Anda tidak valid'
            }
            return undefined
        },
        wardValidation: value => {
            if (!value) {
                return 'Masukkan kelurahan Anda'
            } else if (!/^[a-zA-Z0-9-,.()/'\s]*$/.test(value)) {
                return 'Format yang Anda masukkan tidak valid'
            }
            return undefined
        },
        cityValidation: value => {
            if (!value) {
                return 'Pilih kota Anda'
            }
            return undefined
        },
        relationshipValidation: value => {
            if (!value) {
              return 'Pilih hubunga Anda'
            }
            return undefined
        },
        districtValidation: value => {
            if (!value) {
                return 'Masukkan kecamatan Anda'
            } else if (!/^[a-zA-Z0-9-,.()/'\s]*$/.test(value)) {
                return 'Format yang Anda masukkan tidak valid'
            }
            return undefined
        },
        addressValidation: (value, maxLength) => {
            if (!value) {
                return 'Masukkan alamat Anda'
            } else if (!/^[a-zA-Z0-9-,.()/'\s\u2018\u2019]*$/.test(value)
                || (value.length > maxLength)) {
                return 'Format yang Anda masukkan tidak valid'
            }
            return undefined
        },
        loanPurposeValidation: value => {
            if (!value) {
                return 'Pilih tujuan pinjaman Anda'
            }
            return undefined
        },
        dobValidation: (value) => {
            function calculateAge(birthDay, birthMonth, birthYear) {
                let currentDate = new Date();
                let currentYear = currentDate.getFullYear();
                let currentMonth = currentDate.getMonth();
                let currentDay = currentDate.getDate();
                let calculatedAge = currentYear - birthYear;

                if (currentMonth < birthMonth - 1) {
                    calculatedAge--;
                }
                if (birthMonth - 1 === currentMonth && currentDay < birthDay) {
                    calculatedAge--;
                }
                return calculatedAge;
            }

            let arrayDays = value && value.split('/');
            let day = arrayDays && arrayDays[0];
            let month = arrayDays && arrayDays[1];
            let year = arrayDays && arrayDays[2];
            if (StringUtils.isEmpty(day) || StringUtils.isEmpty(month) || StringUtils.isEmpty(year)) {
                return 'Masukkan tanggal lahir Anda'
            }

            let monthLength = new Date(year, month, 0).getDate();
            if (year < Constants.MIN_YEAR_LOAN_CUSTOMER || day <= 0 || day > monthLength) {
                return 'Tanggal lahir yang Anda masukkan tidak valid'
            }

            let age = calculateAge(day, month, year);
            if (age < Constants.MIN_AGE_LOAN_CUSTOMER || age > Constants.MAX_AGE_LOAN_CUSTOMER) {
                return 'Usia Anda tidak sesuai dengan Syarat & Ketentuan KTA TymeDigital'
            }
            return undefined
        }
    },

    customerWorkingInformation: {
        companyNameValidation: (companies) => (value) => {
            let errorMessage = 'Cari nama perusahaan Anda'
            if (StringUtils.isEmpty(value) || StringUtils.isEmpty(value.trim())) {
                return errorMessage
            } else {
                let inputValue = value.trim().toLowerCase()
                let inputLength = inputValue.length
                var result = inputLength === 0 ? [] : companies.filter(item => item.value.toLowerCase() === inputValue)
            
                if (result.length === 0) return errorMessage
            }
            return undefined
        },
        jobTitleValidation: (value, allValues) => {
            if (allValues.occupation && !value) {
                return 'Pilih jabatan Anda'
            }
            return undefined
        },
        lobValidation: (value, allValues) => {
            if (allValues.lineOfBusinessGroup && !value) {
                return 'Pilih jenis bidang/industri Anda'
            }
            return undefined
        },
        lobGroupValidation: (value, allValues) => {
            if(allValues.isDefaultJobTitle) return undefined
            if (!StringUtils.isEmpty(allValues.jobTitle)&& StringUtils.isEmpty(value)) {
                return 'Pilih jenis bidang/industri Anda'
            }
            return undefined
        }
    },

    customerFinancialInformation: {
        earningsPerMonthValidation: (value) => {
            const earningPerMonth = value && value.replace(/\./g, '')
            if (!earningPerMonth) {
                return 'Masukkan penghasilan per bulan Anda'
            } else if (!earningPerMonth.match('^([0-9]+)$')) {
                return 'Penghasilan per bulan harus diisi dengan angka'
            } else if (Defines.MIN_MONTHLY_INCOME_IN_RUPIAH > earningPerMonth) {
                return 'Penghasilan per bulan harus minimum 5 juta rupiah'
            }
            return undefined
        },
        monthlyInstallmentValidation: (value, allValues) => {
            const totalMonthlyInstallment = value && value.replace(/\./g, '')
            const haveMonthlyInstallment = allValues && allValues.haveMonthlyInstallment;
            if (!haveMonthlyInstallment) {
                return undefined
            }
            if (!totalMonthlyInstallment) {
                return 'Masukkan total angsuran per bulan Anda'
            } else if (!totalMonthlyInstallment.match('^([0-9]+)$')) {
                return 'Total angsuran per bulan harus diisi dengan angka'
            }
            return undefined
        },
        monthlyInstallmentSelection: (value) => {
            if (ObjectUtils.isEmpty(value)) {
                return 'Anda harus menjawab pertanyaan ini'
            }
            return undefined
        }
    },

    loginPage: {
        usernameValidate : value => {
            if (!value) {
                return 'Please input username'
            } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                return 'Username wrong format'
            }
            return undefined
        },
        passwordValidate : value => {
            if (!value) {
                return 'Please input password'
            }
            return undefined
        }
    }
}
export default ValidationUtils