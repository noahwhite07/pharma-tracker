"use client" // This tells Next.js this is an interactive client component

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react" // Icons that come with shadcn
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select"
import { MOCK_COMPANIES, Asset } from "@/lib/mockdata" // Your dummy data

interface AssetSearchProps {
  // Callback function to pass the selected asset back to the parent component
  onSelectAsset?: (asset: Asset | null) => void
}

export function AssetSearch(componentProps: AssetSearchProps) {
// State 1: Tracks selected Company ID
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("")

  // State 2: Tracks selected Asset ID
  const [selectedAssetId, setSelectedAssetId] = useState<string>("")

  // DERIVED DATA: Find the company object based on selectedCompanyId
  const selectedCompany = MOCK_COMPANIES.find(
    (c) => c.id === selectedCompanyId
  )

  // DERIVED DATA: Get the assets for that company (or empty array if no company picked)
  const availableAssets = selectedCompany ? selectedCompany.assets : []

  // Handler for when Company Dropdown changes
  const handleCompanyChange = (companyId: string | null) => {
    setSelectedCompanyId(companyId ?? "");
    setSelectedAssetId(""); // Reset asset choice when company changes

    // Clear selected asset in parent
    if (componentProps.onSelectAsset) componentProps.onSelectAsset(null) 
  }

  // Handler for when Asset Dropdown changes
  const handleAssetChange = (assetId: string | null) => {
    setSelectedAssetId(assetId ?? "")
    const asset = availableAssets.find((a) => a.id === assetId) || null

    // Pass the chosen asset up to parent!
    if (componentProps.onSelectAsset) componentProps.onSelectAsset(asset) 
  }

  return (
  <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-card shadow-sm">
      {/* DROPDOWN A: Companies */}
      <div className="w-full sm:w-64 space-y-1.5">
        <label className="text-sm font-medium text-muted-foreground">
          1. Select Company
        </label>
        <Select value={selectedCompanyId} onValueChange={(value, details) => handleCompanyChange(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a company..." />
          </SelectTrigger>
          <SelectContent>
            {MOCK_COMPANIES.map((company) => (
              <SelectItem key={company.id} value={company.id}>
                {company.name} ({company.ticker})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* DROPDOWN B: Assets (Disabled until Company is picked) */}
      <div className="w-full sm:w-64 space-y-1.5">
        <label className="text-sm font-medium text-muted-foreground">
          2. Select Asset
        </label>
        <Select
          disabled={!selectedCompanyId} // Gray out if no company selected
          value={selectedAssetId}
          onValueChange={handleAssetChange}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={
                selectedCompanyId ? "Choose an asset..." : "Select company first"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {availableAssets.map((asset) => (
              <SelectItem key={asset.id} value={asset.id}>
                {asset.name} — {asset.phase}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}