using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TSA.Models
{
    public class CustomTrackingCode
    {
        public int OrgId { get; set; }
        public string Head { get; set; }
        public string Body { get; set; }
        public string EventRegistration { get; set; }    
    }
}
