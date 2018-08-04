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
    [Route("api/TSA")]
    public class TSAController : Controller
    {
        [HttpGet]
        [Route ("{OrgId:int}")]
        public ActionResult GetById(int OrgId)
        {
            using (var OrgContext = new TsaContext()) {
                var OrgDetails = new List<CustomTrackingCode>();
                OrgDetails = OrgContext.CustomTrackingCode.ToList();
                return Ok(OrgDetails);
            }
        }

        [HttpPost]
        public ActionResult AddOrg([FromBody]CustomTrackingCode OrgDetails)
        {
            using (var OrgContext = new TsaContext())
            {
                OrgContext.CustomTrackingCode.Add(OrgDetails);
                OrgContext.SaveChanges();
            }
                return Ok("Added");
        }
    }
}