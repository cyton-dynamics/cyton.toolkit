
"""
FixedDistributionParms

This distribution draws the same value every time.
"""
struct FixedDistributionParms <: DistributionParmSet
  val::Real
  "This provides a hint for setting plot axis limits"
  useful_max::Real
end
function FixedDistributionParms(x::Real)
  return FixedDistributionParms(x, 3x)
end

usefulMax(d::FixedDistributionParms) = d.useful_max

sample(distribution::FixedDistributionParms) = distribution.val

function describe(distribution::FixedDistributionParms)
  return "fixed at $(distribution.val)"
end

function pdf(d::FixedDistributionParms, t::Real)
  if t == d.val
    return Inf
  else
    return 0.0
  end
end
