using Dapper;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository
{
    public class WebContractRepository : IWebContractRepository
    {
        private readonly IGonSaConnection _gonSaConnection;
        public WebContractRepository(IGonSaConnection gonSaConnection)
        {
            _gonSaConnection = gonSaConnection;
        }

        public async Task<IEnumerable<WebContract_Monitor>> GetAll(string cmpnID, string CrtUser)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                string sQuery = @"wspListContractsMonitor";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@cmpnID", cmpnID);
                parameters.Add("@CrtUser", CrtUser);
                conn.Open();
                var result = await conn.QueryAsync<WebContract_Monitor>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public async Task<WebContract> Get(string OID)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                return await con.QuerySingleAsync<WebContract>("SELECT * FROM dbo.webContracts where OID = @OID", new { OID = OID });
            }
        }

        public async Task<IEnumerable<WebContractDetail>> GetDetails(string OID)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                return await con.QueryAsync<WebContractDetail>("SELECT * FROM dbo.webContractDetails where OID = @OID", new { OID = OID });
            }
        }

        public async Task Insert(WebContractViewModel webContractViewModel, string ASM, string SUB, string TEAM, string VISA)
        {
            var webContract = webContractViewModel.WebContract;
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                conn.Open();
                using (IDbTransaction dbTransaction = conn.BeginTransaction())
                {
                    string sQuery = @"INSERT INTO
                                    dbo.webContracts(
                                    ASM,
                                    SUB,
                                    TEAM,
                                    CmpnID,
                                    ClnID,
                                    ZoneID,
                                    RegionID,
                                    CustomerID,
                                    EntryID,
                                    FactorID,
                                    OID,
                                    ODATE,
                                    ClnPath,
                                    MemberCardID,
                                    MembType,
                                    DscnMbRt,
                                    PsCsName,
                                    PsCsFReg,
                                    PsCsTel,
                                    PsCsAddr,
                                    PsCsInfo,
                                    DeliverEm,
                                    DlCsName,
                                    DlCsAddr,
                                    DlCsInfo,
                                    SaleEmID,
                                    SaleEmName,
                                    DESCRIP,
                                    PrdcAmnt,
                                    DscnMbAm,
                                    DscnAmnt,
                                    Sum_Amnt,
                                    SignNumb,
                                    SignDate,
                                    Crt_User,
                                    Crt_Date,
                                    ChgeUser,
                                    ChgeDate)
            values (@ASM,@SUB,@TEAM,@CmpnID,@ClnID,@ZoneID,@RegionID,@CustomerID,@EntryID,@FactorID,@OID,@ODATE,@ClnPath,@MemberCardID,@MembType,@DscnMbRt,@PsCsName,@PsCsFReg,@PsCsTel,
            @PsCsAddr,@PsCsInfo,@DeliverEm,@DlCsName,@DlCsAddr,@DlCsInfo,@SaleEmID,@SaleEmName,
            @DESCRIP,@PrdcAmnt,@DscnMbAm,@DscnAmnt,@Sum_Amnt,@SignNumb,@SignDate,@Crt_User,@Crt_Date,@ChgeUser,@ChgeDate)";

                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("@ASM", webContract.ASM);
                    parameters.Add("@SUB", webContract.SUB);
                    parameters.Add("@TEAM", webContract.TEAM);

                    parameters.Add("@CmpnID", webContract.CmpnID);
                    parameters.Add("@ClnID", webContract.ClnID);
                    parameters.Add("@ZoneID", webContract.ZoneID);
                    parameters.Add("@RegionID", webContract.RegionID);
                    parameters.Add("@CustomerID", webContract.CustomerID);
                    parameters.Add("@EntryID", webContract.EntryID);
                    parameters.Add("@FactorID", webContract.FactorID);
                    parameters.Add("@OID", webContract.OID);
                    parameters.Add("@ODATE", webContract.ODATE);
                    parameters.Add("@ClnPath", webContract.ClnPath);
                    parameters.Add("@MemberCardID", webContract.MemberCardID);
                    parameters.Add("@MembType", webContract.MembType);
                    parameters.Add("@DscnMbRt", webContract.DscnMbRt);
                    parameters.Add("@PsCsName", webContract.PsCsName);
                    parameters.Add("@PsCsFReg", webContract.PsCsFReg);
                    parameters.Add("@PsCsTel", webContract.PsCsTel);
                    parameters.Add("@PsCsAddr", webContract.PsCsAddr);
                    parameters.Add("@PsCsInfo", webContract.PsCsInfo);
                    parameters.Add("@DeliverEm", webContract.DeliverEm);
                    parameters.Add("@DlCsName", webContract.DlCsName);
                    parameters.Add("@DlCsAddr", webContract.DlCsAddr);
                    parameters.Add("@DlCsInfo", webContract.DlCsInfo);
                    parameters.Add("@SaleEmID", webContract.SaleEmID);
                    parameters.Add("@SaleEmName", webContract.SaleEmName);
                    parameters.Add("@DESCRIP", webContract.DESCRIP);
                    parameters.Add("@PrdcAmnt", webContract.PrdcAmnt);
                    parameters.Add("@DscnMbAm", webContract.DscnMbAm);
                    parameters.Add("@DscnAmnt", webContract.DscnAmnt);
                    parameters.Add("@Sum_Amnt", webContract.Sum_Amnt);
                    parameters.Add("@SignNumb", webContract.SignNumb);
                    parameters.Add("@SignDate", webContract.SignDate);
                    parameters.Add("@Crt_User", webContract.Crt_User);
                    parameters.Add("@Crt_Date", webContract.Crt_Date);
                    parameters.Add("@ChgeUser", webContract.ChgeUser);
                    parameters.Add("@ChgeDate", webContract.ChgeDate);

                    await conn.ExecuteAsync(sQuery, param: parameters, transaction: dbTransaction);

                    int detailCount = webContractViewModel.WebContractDetails.Count;
                    for (int i = 0; i < detailCount; i++)
                    {
                        var detail = webContractViewModel.WebContractDetails[i];

                        int checkOnHandResult = await CheckOnHandProductLine(1, webContract.ClnID, webContract.ZoneID, webContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, detail.ItemQtty, 0, detail.StoreQtty, StoreQtty_Old: 0, dbConnection: conn, dbTransaction: dbTransaction);
                        if (checkOnHandResult == 0) // Đủ tồn kho.
                        {
                            throw new Exception($"Sản phẩm {detail.ItemName} không đủ tồn kho");
                        }

                        await DecOnHandProductLine(webContract.ClnID, webContract.ZoneID, webContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, ItemQtty: detail.ItemQtty, ItemQtty_Old: 0, StoreQtty: detail.StoreQtty, StoreQtty_Old: 0, dbConnection: conn, dbTransaction: dbTransaction);

                        DynamicParameters detailParams = new DynamicParameters();
                        detailParams.Add("@OID", webContract.OID);
                        detailParams.Add("@ItemID", detail.ItemID);
                        detailParams.Add("@BoxID", detail.BoxID);
                        detailParams.Add("@BchCode", detail.BchCode);
                        detailParams.Add("@StoreID", detail.StoreID);
                        detailParams.Add("@PrmtID", detail.PrmtID);
                        detailParams.Add("@PrmtListItem", detail.PrmtListItem);
                        detailParams.Add("@ItemName", detail.ItemName);
                        detailParams.Add("@ItemUnit", detail.ItemUnit);
                        detailParams.Add("@ItemUnitName", detail.ItemUnitName);
                        detailParams.Add("@Qc_XaBang", detail.Qc_XaBang ?? "");
                        detailParams.Add("@ItemQtty", detail.ItemQtty);
                        detailParams.Add("@RemnRfQt", detail.RemnRfQt);
                        detailParams.Add("@StoreQtty", detail.StoreQtty);
                        detailParams.Add("@ItemPrice", detail.ItemPrice);
                        detailParams.Add("@PrdcAmnt", detail.PrdcAmnt);
                        detailParams.Add("@DscnMbRt", detail.DscnMbRt);
                        detailParams.Add("@DscnMbAm", detail.DscnMbAm);
                        detailParams.Add("@DscnRate", detail.DscnRate);
                        detailParams.Add("@DscnAmnt", detail.DscnAmnt);
                        detailParams.Add("@SmPdAmnt", detail.SmPdAmnt);
                        detailParams.Add("@DESCRIP", detail.DESCRIP);

                        await conn.ExecuteAsync("wspInsertWebContractsDetails", param: detailParams, transaction: dbTransaction, commandType: CommandType.StoredProcedure);

                    }
                    dbTransaction.Commit();
                }
            }
        }

        public async Task Save(WebContractViewModel webContractViewModel, string ASM, string SUB, string TEAM, string VISA)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                con.Open();
                using (IDbTransaction dbTransaction = con.BeginTransaction())
                {
                    string sQuery = @"
                          UPDATE dbo.webContracts set 
                            MemberCardID = @MemberCardID,
                            MembType = @MembType,
                            DscnMbRt = @DscnMbRt,
                            PsCsName = @PsCsName,
                            PsCsFReg = @PsCsFReg,
                            PsCsTel = @PsCsTel,
                            PsCsAddr = @PsCsAddr,
                            PsCsInfo = @PsCsInfo,
                            DeliverEm = @DeliverEm,
                            DlCsName = @DlCsName,
                            DlCsAddr = @DlCsAddr,
                            DlCsInfo = @DlCsInfo,
                            SaleEmID = @SaleEmID,
                            SaleEmName = @SaleEmName,
                            DESCRIP = @DESCRIP,
                            PrdcAmnt = @PrdcAmnt,
                            DscnMbAm = @DscnMbAm,
                            Sum_Amnt = @Sum_Amnt,
                            DscnAmnt = @DscnAmnt,
                            SignDate = @SignDate,
                            ChgeUser = @ChgeUser,
                            ChgeDate = @ChgeDate WHERE OID = @OID";

                    var webContract = webContractViewModel.WebContract;

                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("@OID", webContract.OID);
                    parameters.Add("@MemberCardID", webContract.MemberCardID);
                    parameters.Add("@MembType", webContract.MembType);
                    parameters.Add("@DscnMbRt", webContract.DscnMbRt);
                    parameters.Add("@PsCsName", webContract.PsCsName);
                    parameters.Add("@PsCsFReg", webContract.PsCsFReg);
                    parameters.Add("@PsCsTel", webContract.PsCsTel);
                    parameters.Add("@PsCsAddr", webContract.PsCsAddr);
                    parameters.Add("@PsCsInfo", webContract.PsCsInfo);
                    parameters.Add("@DeliverEm", webContract.DeliverEm);
                    parameters.Add("@DlCsName", webContract.DlCsName);
                    parameters.Add("@DlCsAddr", webContract.DlCsAddr);
                    parameters.Add("@DlCsInfo", webContract.DlCsInfo);
                    parameters.Add("@SaleEmID", webContract.SaleEmID);
                    parameters.Add("@SaleEmName", webContract.SaleEmName);
                    parameters.Add("@DESCRIP", webContract.DESCRIP);
                    parameters.Add("@PrdcAmnt", webContract.PrdcAmnt);
                    parameters.Add("@DscnMbAm", webContract.DscnMbAm);
                    parameters.Add("@DscnAmnt", webContract.DscnAmnt);
                    parameters.Add("@Sum_Amnt", webContract.Sum_Amnt);
                    parameters.Add("@SignDate", webContract.SignDate);
                    parameters.Add("@ChgeUser", webContract.ChgeUser);
                    parameters.Add("@ChgeDate", webContract.ChgeDate);

                    await con.ExecuteAsync(sQuery, param: parameters, transaction: dbTransaction);

                    var insertedWebContract = await con.QuerySingleAsync<WebContract>("SELECT * FROM dbo.webContracts where OID = @OID", new { OID = webContract.OID }, transaction: dbTransaction); // webcontract ở trên ko có thông só, vì store monitor ko trả về.
                    var details = await con.QueryAsync<WebContractDetail>("SELECT * FROM dbo.webContractDetails where OID = @OID", new { OID = webContract.OID }, transaction: dbTransaction);
                    //foreach qua lisst moi
                    //foreach (var new_detail in webContractViewModel.WebContractDetails)
                    //{
                    //    // kiem tra co trong orderluc chua sua khong.
                    //    var existing_list = oldDetails.Where(x =>
                    //    x.ItemID == new_detail.ItemID
                    //    && x.BoxID == new_detail.BoxID
                    //    && x.BchCode == new_detail.BchCode
                    //    && x.StoreID == new_detail.StoreID
                    //    && x.PrmtID == new_detail.PrmtID && ((x.Qc_XaBang ?? "") == new_detail.Qc_XaBang));
                    //    if (existing_list.Any()) // co trong list cu.
                    //    {
                    //        var existing = existing_list.FirstOrDefault();
                    //        await IncOnHandProductLine(insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, existing.ItemID, VISA, new_detail.ItemQtty, existing.ItemQtty, new_detail.StoreQtty, existing.StoreQtty, con, dbTransaction);
                    //        // check ton kho theo entity moi.


                    //        // cap nhat theo detail moi.
                    //        await DecOnHandProductLine(insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, existing.ItemID, VISA, ItemQtty: new_detail.ItemQtty, ItemQtty_Old: existing.ItemQtty, StoreQtty: new_detail.StoreQtty, StoreQtty_Old: existing.StoreQtty, dbConnection: con, dbTransaction: dbTransaction);
                    //    }
                    //}

                    //foreach (var detail in oldDetails)
                    //{
                    //    await IncOnHandProductLine(insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, detail.ItemQtty, 0, detail.StoreQtty, 0, con, dbTransaction);
                    //}

                    //await con.ExecuteAsync("DELETE FROM webContractDetails where OID= @OID", new
                    //{
                    //    OID = webContract.OID
                    //}, transaction: dbTransaction, commandType: CommandType.Text);
                    foreach (var detail in details)
                    {
                        await IncOnHandProductLine(webContract.OID, insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, detail.ItemQtty, 0, detail.StoreQtty, 0, con, dbTransaction);
                    }

                    await con.ExecuteAsync("DELETE FROM webContractDetails where OID= @OID", new
                    {
                        OID = webContract.OID
                    }, transaction: dbTransaction, commandType: CommandType.Text);


                    int detailCount = webContractViewModel.WebContractDetails.Count;
                    for (int i = 0; i < detailCount; i++)
                    {
                        var detail = webContractViewModel.WebContractDetails[i];

                        int checkOnHandResult = await CheckOnHandProductLine(1, insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, detail.ItemQtty, 0, detail.StoreQtty, StoreQtty_Old: 0, dbConnection: con, dbTransaction: dbTransaction);
                        if (checkOnHandResult == 0) // Đủ tồn kho.
                        {
                            throw new Exception($"Sản phẩm {detail.ItemName} không đủ tồn kho");
                        }

                        await DecOnHandProductLine(insertedWebContract.ClnID, insertedWebContract.ZoneID, insertedWebContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, ItemQtty: detail.ItemQtty, ItemQtty_Old: 0, StoreQtty: detail.StoreQtty, StoreQtty_Old: 0, dbConnection: con, dbTransaction: dbTransaction);

                        DynamicParameters detailParams = new DynamicParameters();
                        detailParams.Add("@OID", webContract.OID);
                        detailParams.Add("@ItemID", detail.ItemID);
                        detailParams.Add("@BoxID", detail.BoxID);
                        detailParams.Add("@BchCode", detail.BchCode);
                        detailParams.Add("@StoreID", detail.StoreID);
                        detailParams.Add("@PrmtID", detail.PrmtID);
                        detailParams.Add("@PrmtListItem", detail.PrmtListItem);
                        detailParams.Add("@ItemName", detail.ItemName);
                        detailParams.Add("@ItemUnit", detail.ItemUnit);
                        detailParams.Add("@ItemUnitName", detail.ItemUnitName);
                        detailParams.Add("@Qc_XaBang", detail.Qc_XaBang ?? "");
                        detailParams.Add("@ItemQtty", detail.ItemQtty);
                        detailParams.Add("@RemnRfQt", detail.RemnRfQt);
                        detailParams.Add("@StoreQtty", detail.StoreQtty);
                        detailParams.Add("@ItemPrice", detail.ItemPrice);
                        detailParams.Add("@PrdcAmnt", detail.PrdcAmnt);
                        detailParams.Add("@DscnMbRt", detail.DscnMbRt);
                        detailParams.Add("@DscnMbAm", detail.DscnMbAm);
                        detailParams.Add("@DscnRate", detail.DscnRate);
                        detailParams.Add("@DscnAmnt", detail.DscnAmnt);
                        detailParams.Add("@SmPdAmnt", detail.SmPdAmnt);
                        detailParams.Add("@DESCRIP", detail.DESCRIP);

                        await con.ExecuteAsync("wspInsertWebContractsDetails", param: detailParams, transaction: dbTransaction, commandType: CommandType.StoredProcedure);
                    }
                    dbTransaction.Commit();
                }
            }
        }

        public async Task<string> GetOID(string KeyId, string cmpnID)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                string sQuery = @"bosConfigure.dbo.bos_MakeKeyValue";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@cmpnID", cmpnID);
                parameters.Add("@KeyId", KeyId);
                conn.Open();
                var rs = await conn.QueryAsync<string>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
                return rs.First();
            }
        }

        public async Task<string> GetOID(string UserCode)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                string sQuery = $"select '{UserCode}/'+ FORMAT( CURRENT_TIMESTAMP,'yyMMdd:hhmmssfff')";
                conn.Open();
                var rs = await conn.QueryAsync<string>(sQuery);
                return rs.First();
            }
        }

        public async Task<WebContractViewModel> GetByOID(string OID)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                WebContractViewModel model = new WebContractViewModel();
                var result = await conn.QueryMultipleAsync("wspContracts", new { OID = OID }, commandType: CommandType.StoredProcedure);
                model.WebContract = result.Read<WebContract>().OrderByDescending(x => x.SignNumb).FirstOrDefault();
                model.WebContractDetails = result.Read<WebContractDetail>().ToList();
                return model;
            }
        }

        public async Task Delete(string OID, string ASM, string SUB, string TEAM, string VISA)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                con.Open();
                using (IDbTransaction dbTransaction = con.BeginTransaction())
                {
                    var webContract = await this.Get(OID);
                    var details = await this.GetDetails(OID);

                    foreach (var detail in details)
                    {
                        await IncOnHandProductLine(OID, webContract.ClnID, webContract.ZoneID, webContract.RegionID, ASM, SUB, TEAM, detail.ItemID, VISA, detail.ItemQtty, 0, detail.StoreQtty, 0, con, dbTransaction);
                    }

                    await con.ExecuteAsync("DELETE FROM webContractDetails where OID= @OID", new
                    {
                        OID = OID
                    }, transaction: dbTransaction, commandType: CommandType.Text);

                    await con.ExecuteAsync("DELETE FROM webContracts where OID= @OID", new
                    {
                        OID = OID
                    }, transaction: dbTransaction, commandType: CommandType.Text);

                    dbTransaction.Commit();
                }
            }
        }

        public async Task DeleteDetail(string OID, string ItemID, string BoxID, string BchCode, string StoreID, string PrmtID)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                con.Open();
                using (IDbTransaction dbTransaction = con.BeginTransaction())
                {
                    string query = @"DELETE FROM webContractDetails where OID = @OID, ItemId = @ItemId, BoxID = @BoxId, BchCode = @BchCode, StoreId = @StoreID, PrmtID = @PrmtID";
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("@OID", OID);
                    parameters.Add("@ItemID", ItemID);
                    parameters.Add("@BoxID", BoxID);
                    parameters.Add("@BchCode", BchCode);
                    parameters.Add("@StoreID", StoreID);
                    parameters.Add("@PrmtID", PrmtID);
                    await con.ExecuteAsync(query, param: parameters, transaction: dbTransaction, commandType: CommandType.Text);
                    dbTransaction.Commit();
                }
            }
        }

        public async Task<int> CheckOnHandProductLine(int IsCheck, string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string TEAM, string ItemID, string VISA, decimal ItemQtty, decimal ItemQtty_Old, decimal StoreQtty, decimal StoreQtty_Old, IDbConnection dbConnection, IDbTransaction dbTransaction)
        {
            string query = "wspProducts_CheckOnhand";
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@IsCheck", IsCheck);
            parameters.Add("@ClnID", ClnID);
            parameters.Add("@ZoneID", ZoneID);
            parameters.Add("@RegionID", RegionID);
            parameters.Add("@ASM", ASM);
            parameters.Add("@SUB", SUB);
            parameters.Add("@TEAM", TEAM);
            parameters.Add("@ItemID", ItemID);
            parameters.Add("@VISA", VISA);
            parameters.Add("@ItemQtty", ItemQtty);
            parameters.Add("@ItemQtty_Old", ItemQtty_Old);
            parameters.Add("@StoreQtty", StoreQtty);
            parameters.Add("@StoreQtty_Old", StoreQtty_Old);
            int result = await dbConnection.QuerySingleAsync<int>(query, param: parameters, transaction: dbTransaction, commandType: CommandType.StoredProcedure);
            return result;
        }

        public async Task DecOnHandProductLine(string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string TEAM, string ItemID, string VISA, decimal ItemQtty, decimal ItemQtty_Old, decimal StoreQtty, decimal StoreQtty_Old, IDbConnection dbConnection, IDbTransaction dbTransaction)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@ClnID", ClnID);
            parameters.Add("@ZoneID", ZoneID);
            parameters.Add("@RegionID", RegionID);
            parameters.Add("@ASM", ASM);
            parameters.Add("@SUB", SUB);
            parameters.Add("@TEAM", TEAM);
            parameters.Add("@ItemID", ItemID);
            parameters.Add("@VISA", VISA);
            parameters.Add("@ItemQtty", ItemQtty);
            parameters.Add("@ItemQtty_Old", ItemQtty_Old);
            parameters.Add("@StoreQtty", StoreQtty);
            parameters.Add("@StoreQtty_Old", StoreQtty_Old);
            await dbConnection.ExecuteAsync("wspProducts_DecOnhand", param: parameters, transaction: dbTransaction, commandType: CommandType.StoredProcedure);
        }

        public async Task IncOnHandProductLine(string OID, string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string TEAM, string ItemID, string VISA, decimal ItemQtty, decimal ItemQtty_Old, decimal StoreQtty, decimal StoreQtty_Old, IDbConnection dbConnection, IDbTransaction dbTransaction)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("@OID", OID);
            parameters.Add("@ClnID", ClnID);
            parameters.Add("@ZoneID", ZoneID);
            parameters.Add("@RegionID", RegionID);
            parameters.Add("@ASM", ASM);
            parameters.Add("@SUB", SUB);
            parameters.Add("@TEAM", TEAM);
            parameters.Add("@ItemID", ItemID);
            parameters.Add("@VISA", VISA);
            parameters.Add("@ItemQtty", ItemQtty);
            parameters.Add("@ItemQtty_Old", ItemQtty_Old);
            parameters.Add("@StoreQtty", StoreQtty);
            parameters.Add("@StoreQtty_Old", StoreQtty_Old);
            await dbConnection.ExecuteAsync("wspProducts_IncOnhand", param: parameters, transaction: dbTransaction, commandType: CommandType.StoredProcedure);
        }

        public async Task<int> ApproveContract(Approve approve)
        {
            using (IDbConnection con = _gonSaConnection.GetConnection())
            {
                con.Open();
                using (IDbTransaction dbTransaction = con.BeginTransaction())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("@FactorID", approve.FactorID);
                    parameters.Add("@OID", approve.OID);
                    parameters.Add("@ODate", approve.ODate.ToString("yyyy/MM/yy"));
                    parameters.Add("@CmpnID", approve.CmpnID);
                    parameters.Add("@Crt_User", approve.Crt_User);
                    parameters.Add("@DataTbl", approve.DataTbl);
                    parameters.Add("@SignTble", approve.SignTble);
                    parameters.Add("@SignChck", approve.SignChck);
                    parameters.Add("@holdSignNumb", approve.holdSignNumb);
                    parameters.Add("@nextSignNumb", approve.nextSignNumb);

                    parameters.Add("@Variant22", approve.Variant22);
                    parameters.Add("@EntryID", approve.EntryID);
                    parameters.Add("@AppvMess", approve.AppvMess);
                    ApproveResponse response = await con.QuerySingleAsync<ApproveResponse>("BosApproval.dbo.zsgn_webContracts_NOR", param: parameters, transaction: dbTransaction, commandType: CommandType.StoredProcedure);
                    dbTransaction.Commit();
                    if (response.ExecValue == 1)
                    {
                        return 1;
                    }
                    else
                    {
                        return 0;
                    }
                }
            }
        }
    }
}
