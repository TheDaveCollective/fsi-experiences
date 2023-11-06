/* System form types as specified in CDS.
 * {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/systemform?view=dynamics-ce-odata-9}
 */
export const CrmFormType = {
    Dashboard: 0,
    AppointmentBook: 1,
    Main: 2,
    MiniCampaginBO: 3,
    Preview: 4,
    MobileExpress: 5,
    QuickViewForm: 6,
    QuickCreate: 7,
    Dialog: 8,
    TaskFlowForm: 9,
    InteractionCentricDashboard: 10,
    Card: 11,
    MainInteractiveExperience: 12,
    Other: 100,
    MainBackup: 101,
    AppointmentBookBackup: 102,
    PowerBiDashboard: 103,
};

export enum AttributeType {
    Boolean = 'boolean',
    Unknown = 'unknown',
    Customer = 'customer',
    Date = 'date',
    DateTime = 'datetime',
    Decimal = 'decimal',
    Double = 'double',
    Image = 'image',
    Integer = 'integer',
    Lookup = 'lookup',
    ManagedProperty = 'managedproperty',
    Memo = 'memo',
    Money = 'money',
    OptionSet = 'optionset',
    Owner = 'owner',
    PartyList = 'partylist',
    PickList = 'picklist',
    State = 'state',
    Status = 'status',
    String = 'string',
    UniqueIdentifier = 'uniqueidentifier',
    CalendarRules = 'calendarrules',
    Virtual = 'virtual',
    BigInt = 'bigint',
    EntityName = 'entityname',
    EntityImage = 'entityimage',
    AliasedValue = 'aliasedvalue',
    Regarding = 'regarding',
    MultiSelectPickList = 'multiselectpicklist',
    File = 'file',
    NavigationProperty = 'navigationproperty',
}