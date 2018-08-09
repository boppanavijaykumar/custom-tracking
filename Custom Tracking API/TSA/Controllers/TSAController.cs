using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TSA.Data;
using TSA.Models;

namespace TSA.Controllers
{
    [Produces("application/json")]
    [Route("api/tsa")]
    public class TSAController : Controller
    {
        [HttpGet]
        [Route("get/{OrgId:int}")]
        public ActionResult GetTrackingDetails(int OrgId)
        {
            using (var OrgContext = new TsaContext())
            {
                var OrgDetails = OrgContext.CustomTrackingCode.Where(q => q.OrgId == OrgId).SingleOrDefault();
                return Ok(OrgDetails);
            }
        }

        [HttpPost]
        [Route("add")]
        public ActionResult AddTrackingDetails([FromBody]CustomTrackingCode OrgDetails)
        {
            using (var OrgContext = new TsaContext())
            {
                var userDetails = OrgContext.CustomTrackingCode.AsNoTracking().Where(q => q.OrgId == OrgDetails.OrgId).SingleOrDefault();
                if (userDetails != null)
                {
                    OrgContext.CustomTrackingCode.Update(OrgDetails);
                    OrgContext.SaveChanges();
                }
                else
                {
                    OrgContext.CustomTrackingCode.Add(OrgDetails);
                    OrgContext.SaveChanges();
                }
            }
            return Ok(OrgDetails);
        }

        //[HttpPut]
        //[Route("update")]
        //public ActionResult UpdateTrackingDetails([FromBody]CustomTrackingCode OrgDetails)
        //{
        //    using (var OrgContext = new TsaContext())
        //    {
        //        var userDetails = OrgContext.CustomTrackingCode.Where(q => q.OrgId == OrgDetails.OrgId).SingleOrDefault();
        //        if (userDetails != null)
        //        {
        //            OrgContext.CustomTrackingCode.Update(OrgDetails);
        //            OrgContext.SaveChanges();
        //        }
        //    }
        //    return Ok(OrgDetails);
        //}
    }
}