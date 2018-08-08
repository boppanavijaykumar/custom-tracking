using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TSA.Models;

namespace TSA.Data.Configurations
{
    public class TsaConfiguration : IEntityTypeConfiguration<CustomTrackingCode>
    {
        public void Configure(EntityTypeBuilder<CustomTrackingCode> builder)
        {
            
            builder.ToTable("CustomTrackingCode");

            //Primary Key
            builder.HasKey(k => k.OrgId);

            //Properties
            builder.Property(p => p.Head).HasColumnName("Head");
            builder.Property(p => p.Body).HasColumnName("Body");
            builder.Property(p => p.EventRegistration).HasColumnName("EventRegistration");
        }
    }
}
