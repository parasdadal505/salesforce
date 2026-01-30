trigger Filed_Update_account_with_time on Account (after update) {

    if (Trigger.isAfter && Trigger.isUpdate) {

        if (!AccountTriggerHandler.hasAfterUpdateAlreadyExecuted) {

            AccountTriggerHandler.hasAfterUpdateAlreadyExecuted = true;

            new AccountTriggerHandler().afterUpdateHandler(
                Trigger.new,
                Trigger.oldMap
            );
        }
    }
}
