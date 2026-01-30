public with sharing class AccountController {


    @AuraEnabled(cacheable=true)
    public static List<Account> getHighRevenueAccountRecords() {
       
            try {
                return [ select Id, Name, AnnualRevenue ,Phone, Website from Account order by AnnualRevenue DESC NULLS LAST ];
                
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }


    }
