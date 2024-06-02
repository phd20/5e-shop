export interface Armor {
    Name: string;
    Cost: string;
    ArmorClass: string;
    Strength: string | null;
    Stealth: string | null;
    Weight: string;
    Type: "Light" | "Medium" | "Heavy"
}