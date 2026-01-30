public class AccountTriggerHandler {

    public static Boolean hasAfterUpdateAlreadyExecuted = false;

    public void afterUpdateHandler(
        List<Account> newList,
        Map<Id, Account> oldMap
    ) {

        List<Account> accountsToUpdate = new List<Account>();

        for (Account acc : newList) {

            Account oldAcc = oldMap.get(acc.Id);

            // 🔥 recursion stop condition
            if (oldAcc.Last_after_update_excution_time__c == null) {

                accountsToUpdate.add(new Account(
                    Id = acc.Id,
                    Last_after_update_excution_time__c = System.now()
                ));
            }
        }

        if (!accountsToUpdate.isEmpty()) {
            update accountsToUpdate;
        }
    }
}
