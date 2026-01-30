trigger OpportunityAutomation on Opportunity (before insert , before update, after insert, after update) {


    switch on trigger.operationType {
        when BEFORE_INSERT, BEFORE_UPDATE {


            for(Opportunity opp : trigger.new){
                
            if(opp.StageName == 'Closed Won'){

                opp.Nextstep = 'Onboard a Contract'; 
            }
            }

            
            
        }
        when AFTER_INSERT, AFTER_UPDATE {

            
            List<Task> tasks = new List<Task>();
            for(Opportunity opp : trigger.new){


            if(opp.StageName == 'Closed Won'){
            Task engageWithCustomer = new Task();
            engageWithCustomer.whatId = opp.Id;
            engageWithCustomer.ownerId = opp.ownerId;
            engageWithCustomer.Subject = 'Engage with Customer';
         
            tasks.add(engageWithCustomer);

            Task WelcomeCall = new Task();
            WelcomeCall.whatId = opp.Id;
            WelcomeCall.ownerId = opp.ownerid;
            WelcomeCall.Subject = 'Welcome Call';
         
            tasks.add(WelcomeCall);

            Task ThankYouEmail = new Task();
            ThankYouEmail.whatId = opp.Id;
            ThankYouEmail.ownerId = opp.ownerid;
            ThankYouEmail.Subject = 'send a thank you email';
         
            tasks.add(ThankYouEmail);

            }
        }
            if(tasks.size() > 0){
                insert tasks;
        }
    }

}}