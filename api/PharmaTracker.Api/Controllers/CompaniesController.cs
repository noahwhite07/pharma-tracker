using Microsoft.AspNetCore.Mvc;

namespace PharmaTracker.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompaniesController : ControllerBase
    {
        // GET: api/companies
        [HttpGet]
        public IActionResult GetCompanies()
        {
            // We hardcode dummy data here just to test the API pipe
            var mockCompanies = new List<Company>
            {
                new Company
                {
                    Id = "1",
                    Name = "Vertex Pharmaceuticals",
                    Ticker = "VRTX",
                    StockPrice = 465.20m,
                    ChangePercent = 1.45m,
                    Assets = new List<Asset>
                    {
                        new Asset
                        {
                            Id = "a1",
                            Name = "Suzetrigine (VX-548)",
                            Indication = "Moderate-to-Severe Acute Pain",
                            Phase = "Phase 3",
                            AiSummary = "Topline Phase 3 results showed significant reduction in pain intensity over placebo. FDA NDA filing submitted Q1.",
                            LastUpdated = "2026-07-20"
                        }
                    }
                },
                new Company
                {
                    Id = "2",
                    Name = "Ventyx Biosciences",
                    Ticker = "VTYX",
                    StockPrice = 2.85m,
                    ChangePercent = -3.20m,
                    Assets = new List<Asset>
                    {
                        new Asset
                        {
                            Id = "a2",
                            Name = "VTX3232",
                            Indication = "Parkinson's Disease / NLRP3 inhibitor",
                            Phase = "Phase 1",
                            AiSummary = "Phase 1 trial demonstrated CNS penetrance and favorable safety profile in healthy volunteers.",
                            LastUpdated = "2026-07-15"
                        }
                    }
                }
            };

            return Ok(mockCompanies);
        }
    }

    // --- Data Models (These map 1:1 to TypeScript Interfaces) ---
    public class Company
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Ticker { get; set; } = string.Empty;
        public decimal StockPrice { get; set; }
        public decimal ChangePercent { get; set; }
        public List<Asset> Assets { get; set; } = new();
    }

    public class Asset
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Indication { get; set; } = string.Empty;
        public string Phase { get; set; } = string.Empty;
        public string AiSummary { get; set; } = string.Empty;
        public string LastUpdated { get; set; } = string.Empty;
    }
}