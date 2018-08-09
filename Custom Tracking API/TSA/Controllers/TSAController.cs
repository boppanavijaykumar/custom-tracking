using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TSA.Data;
using TSA.Models;

namespace TSA.Controllers
{
    [Produces("application/json")]
    [Route("api/tsa")]
    public class TSAController : Controller
    {
        [HttpGet]
        [Route ("get/{OrgId:int}")]
        public ActionResult GetTrackingDetails(int OrgId)
        {
            using (var OrgContext = new TsaContext()) {
               var OrgDetails = OrgContext.CustomTrackingCode.Where(q => q.OrgId == OrgId).SingleOrDefault();
                return Ok(OrgDetails);
            }
        }

        [HttpPost]
        [Route ("add")]
        public ActionResult AddTrackingDetails([FromBody]CustomTrackingCode OrgDetails)
        {
            using (var OrgContext = new TsaContext())
            {
                OrgContext.CustomTrackingCode.Add(OrgDetails);
                OrgContext.SaveChanges();
            }
            return Ok(OrgDetails);
        }
    }
}
